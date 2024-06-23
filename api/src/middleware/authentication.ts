import type { Request } from 'express'
import { expressjwt as expressJwtMiddlewareFactory } from 'express-jwt'

import config from '~/config'
import { ACCESS_TOKEN_HEADER } from '~/constants/headers'

function getToken(req: Request): string | null {
  return req.cookies[ACCESS_TOKEN_HEADER] ?? null
}

export const authenticationMiddlewareFactory = ({ ignoreExpiration = false }: { ignoreExpiration?: boolean } = {}) =>
  expressJwtMiddlewareFactory({
    secret: config.jwtSecret,
    algorithms: ['HS256'],
    ignoreExpiration,
    getToken,
  })
