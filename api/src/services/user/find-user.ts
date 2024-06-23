import type { Prisma } from '@prisma/client'
import bcrypt from 'bcrypt'

import { NotFoundError } from '~/libs/errors'
import { prismaClient } from '~/prisma'

const ERROR_MESSAGE = 'User with these credentials does not exist.'

export async function findUser(
  { password, email }: { password: string; email: string },
  { transactionClient }: { transactionClient?: Prisma.TransactionClient } = {},
) {
  const dbClient = transactionClient ?? prismaClient

  const user = await dbClient.user.findUnique({ where: { email } })
  if (!user) throw new NotFoundError({ message: ERROR_MESSAGE })

  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) throw new NotFoundError({ message: ERROR_MESSAGE })

  return user
}
