import type { Request, Response } from 'express'

import { prismaClient } from '~/prisma'
import * as TokenService from '~/services/token'

import * as UserService from '../user'

export async function signIn(req: Request, res: Response) {
  const loginResponseBody = await prismaClient.$transaction(async (transactionClient) => {
    const user = await UserService.findUser(req.body, { transactionClient })
    const tokens = await UserService.upsertUserTokens({ userId: user.id }, { transactionClient })
    return { ...user, ...tokens }
  })

  return TokenService.sendResponseWithAccessTokenCookie(res, loginResponseBody)
}
