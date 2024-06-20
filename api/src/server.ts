import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import 'dotenv/config'
import express, { Request, Response } from 'express'
import morgan from 'morgan'
import 'reflect-metadata'

import { errorsHandler } from './middleware'

const prisma = new PrismaClient()

async function start() {
  const app = express()

  app.use(cors())
  app.use(morgan(':date[iso] :method :url :status :res[content-length] - :response-time ms'))
  app.get('/', async (_req: Request, res: Response) => {
    const user = await prisma.user.findFirst()
    res.send(user)
  })

  app.use(errorsHandler)

  app.listen(process.env.PORT, () => {
    console.log(`Application ready on port ${process.env.PORT}! 🚥`)
  })
}

start().catch((err) => console.error('Failed to start server', err))
