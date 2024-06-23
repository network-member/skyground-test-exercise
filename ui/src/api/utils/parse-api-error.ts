import { isAxiosError } from 'axios'

type ErrorResponse = { errors: string[] }

export function parseApiError(err: unknown): { errors: string[] | null; statusCode: number | null } {
  if (!isAxiosError<ErrorResponse>(err)) throw err
  const errors = err.response?.data.errors ?? null
  const statusCode = err.response?.status ?? null
  return { errors, statusCode }
}
