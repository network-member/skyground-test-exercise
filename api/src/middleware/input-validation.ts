import type { Request, Response, NextFunction } from 'express'
import type { ObjectSchema } from 'joi'
import { isEmpty } from 'lodash'

import { BadRequestError } from '~/libs/errors'

function inputValidationMiddlewareFactory<T>(
  schema: ObjectSchema<T>,
  { dataFieldKey, missingErrorMessage }: { dataFieldKey: string; missingErrorMessage: string },
) {
  return function bodyValidationMiddleware(req: Request, _res: Response, next: NextFunction) {
    if (isEmpty(req[dataFieldKey])) throw new BadRequestError({ message: missingErrorMessage })

    const { value, error } = schema.validate(req[dataFieldKey], { abortEarly: false })
    if (error) throw new BadRequestError({ details: error.details.map((e) => e.message) })

    req[dataFieldKey] = value
    return next()
  }
}

export const bodyValidationMiddlewareFactory = <T>(schema: ObjectSchema<T>) =>
  inputValidationMiddlewareFactory(schema, {
    dataFieldKey: 'body',
    missingErrorMessage: 'JSON request body is missing.',
  })

export const queryValidationMiddlewareFactory = <T>(schema: ObjectSchema<T>) =>
  inputValidationMiddlewareFactory(schema, {
    dataFieldKey: 'query',
    missingErrorMessage: 'Query params are missing.',
  })
