import type { Response } from 'express'

import { ACCESS_TOKEN_HEADER } from '~/constants/headers'
import { sanitizeResponseBody } from '~/helpers'

import { REFRESH_TOKEN_EXPIRATION_TIME } from './generate-refresh-token'

export function sendResponseWithAccessTokenCookie<T extends { accessToken: string }>(
  res: Response,
  { accessToken, ...body }: T,
) {
  res.cookie(ACCESS_TOKEN_HEADER, accessToken, {
    /* We want access token to live in browser cookie as long as refresh token is not expired,
       because we verify sign of access token every time user refresh it. */
    maxAge: REFRESH_TOKEN_EXPIRATION_TIME + 60,
    httpOnly: true,
    sameSite: 'none',
    secure: true,
  }),
    res.send(sanitizeResponseBody(body))
}
