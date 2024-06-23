import { omit } from 'lodash'

const SENSITIVE_KEYS_WHITELIST = Object.freeze(['accessToken', 'password'] as const)

export function sanitizeResponseBody<T extends object>(body: T | T[]) {
  if (Array.isArray(body)) return body.map((i) => omit(i, SENSITIVE_KEYS_WHITELIST))
  return omit(body, SENSITIVE_KEYS_WHITELIST)
}
