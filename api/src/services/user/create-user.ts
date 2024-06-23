import type { Prisma } from '@prisma/client'
import bcrypt from 'bcrypt'

import { BadRequestError } from '~/libs/errors'
import { prismaClient } from '~/prisma'

const SALT_ROUNDS = 10

export async function createUser(
  { fullName, password, email }: { fullName: string; password: string; email: string },
  { transactionClient }: { transactionClient?: Prisma.TransactionClient } = {},
) {
  const dbClient = transactionClient ?? prismaClient
  const passwordHash = await bcrypt.hash(password, SALT_ROUNDS)

  const user = await dbClient.user.findUnique({ where: { email } })
  if (user) throw new BadRequestError({ message: 'User with this email already exists.' })

  return await dbClient.user.create({ data: { fullName, password: passwordHash, email } })
}
