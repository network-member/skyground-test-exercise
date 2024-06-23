import type { Request, Response } from 'express'

import { sanitizeResponseBody } from '~/helpers'
import { prismaClient } from '~/prisma'

export async function getMany(req: Request, res: Response) {
  const { limit, offset } = req.query

  const usersList = await prismaClient.user.findMany({
    skip: Number(offset),
    take: Number(limit),
    orderBy: {
      id: 'asc',
    },
  })
  res.send(sanitizeResponseBody(usersList))
}
