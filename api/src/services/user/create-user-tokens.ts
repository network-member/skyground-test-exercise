import type { Prisma } from '@prisma/client'

import { prismaClient } from '~/prisma'
import * as TokenService from '~/services/token'

export async function upsertUserTokens(
  payload: { userId: number },
  { transactionClient }: { transactionClient?: Prisma.TransactionClient } = {},
) {
  const dbClient = transactionClient ?? prismaClient
  const refreshToken = TokenService.generateRefreshToken(payload)
  const { accessToken, accessTokenExpiresIn } = TokenService.generateAccessToken(payload)

  await dbClient.userTokens.upsert({
    where: { userId: payload.userId },
    update: { refreshToken },
    create: { userId: payload.userId, refreshToken },
  })

  return { accessToken, refreshToken, accessTokenExpiresIn }
}
