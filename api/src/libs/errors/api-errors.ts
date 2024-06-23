import { StatusCodes, ReasonPhrases } from 'http-status-codes'

export class ApiError extends Error {
  statusCode: number
  details: string[]

  constructor({ message, statusCode, details }: { message: string; statusCode: number; details?: string[] }) {
    super(message)
    this.statusCode = statusCode
    this.details = details ?? []
  }
}

export class BadRequestError extends ApiError {
  constructor({ details, message }: { message?: string; details?: string[] } = {}) {
    super({ message: message ?? ReasonPhrases.BAD_REQUEST, statusCode: StatusCodes.BAD_REQUEST, details })
  }
}

export class NotFoundError extends ApiError {
  constructor({ details, message }: { message?: string; details?: string[] } = {}) {
    super({ message: message ?? ReasonPhrases.NOT_FOUND, statusCode: StatusCodes.NOT_FOUND, details })
  }
}

export class UnauthorizedError extends ApiError {
  constructor({ details, message }: { message?: string; details?: string[] } = {}) {
    super({ message: message ?? ReasonPhrases.UNAUTHORIZED, statusCode: StatusCodes.UNAUTHORIZED, details })
  }
}
