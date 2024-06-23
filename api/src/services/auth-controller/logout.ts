import type { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'

import { ACCESS_TOKEN_HEADER } from '~/constants/headers'
import { prismaClient } from '~/prisma'

export async function logout(req: Request, res: Response) {
  const { userId } = req.auth
  await prismaClient.userTokens.deleteMany({
    where: {
      userId,
    },
  })

  res.clearCookie(ACCESS_TOKEN_HEADER, { httpOnly: true })
  res.status(StatusCodes.OK).send()
}
