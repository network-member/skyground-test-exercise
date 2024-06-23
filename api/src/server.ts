import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import 'reflect-metadata'

import config from '~/config'
import router from '~/controllers'

import { errorsHandler } from './middleware'

async function start() {
  const app = express()

  app.use(cors({ origin: config.allowedDomains, credentials: true }))
  app.use(morgan(':date[iso] :method :url :status :res[content-length] - :response-time ms'))
  app.use(bodyParser.json())
  app.use(cookieParser())

  app.use(router)
  app.use(errorsHandler)

  app.listen(config.port, () => {
    console.log(`Application ready on port ${config.port}! 🚥`)
  })
}

start().catch((err) => console.error('Failed to start server', err))
