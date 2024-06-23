import type { Request, Response } from 'express'

import { UnauthorizedError } from '~/libs/errors'
import { prismaClient } from '~/prisma'
import * as TokenService from '~/services/token'

export async function refreshToken(req: Request, res: Response) {
  const { refreshToken } = req.body

  const userTokens = await prismaClient.userTokens.findUnique({ where: { refreshToken } })
  if (!userTokens) throw new UnauthorizedError()

  const { userId } = userTokens
  if (userId !== req.auth.userId) throw new UnauthorizedError()

  const accessTokenInfo = TokenService.generateAccessToken({ userId })
  return TokenService.sendResponseWithAccessTokenCookie(res, accessTokenInfo)
}
