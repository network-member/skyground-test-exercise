import type { Request, Response, NextFunction } from 'express'
import { StatusCodes, ReasonPhrases, getReasonPhrase } from 'http-status-codes'
import { pick } from 'lodash'

import { ApiError } from '~/libs/errors'

export function errorsHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).send({ errors: err.details.length ? err.details : [err.message] })
  }

  const { status, statusCode } = pick(err, ['status', 'statusCode'])
  if (status || statusCode) {
    const errorCode = status ?? statusCode
    return res.status(errorCode).send({ errors: [getReasonPhrase(errorCode)] })
  }

  console.error(err)
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send({ errors: [ReasonPhrases.INTERNAL_SERVER_ERROR] })
}
