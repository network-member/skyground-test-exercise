import { Request, Response, NextFunction } from 'express'
import { getReasonPhrase, getStatusCode, StatusCodes, ReasonPhrases } from 'http-status-codes'

const REASON_PHRASE_TO_STATUS_CODE_MAP = Object.values(ReasonPhrases).reduce<Record<string, number>>(
  (map, currentValue) => {
    map[currentValue] = getStatusCode(currentValue)
    return map
  },
  {},
)

export function errorsHandler(err: Error, _req: Request, res: Response, _next: NextFunction): void {
  const statusCode = REASON_PHRASE_TO_STATUS_CODE_MAP[err.message] ?? StatusCodes.INTERNAL_SERVER_ERROR
  console.error(err)
  res.status(statusCode).send({ statusCode: statusCode, error: getReasonPhrase(statusCode) })
}
