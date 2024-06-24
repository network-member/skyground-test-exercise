import jwt from 'jsonwebtoken'

import config from '~/config'

import { generateRefreshToken, REFRESH_TOKEN_EXPIRATION_TIME } from './generate-refresh-token'

test('Generate refresh token', () => {
  const userId = 1
  const refreshToken = generateRefreshToken({ userId })
  const tokenPayload = jwt.verify(refreshToken, config.jwtSecret) as jwt.JwtPayload
  expect(tokenPayload.userId).toBe(userId)
  expect(tokenPayload.exp).toBe(Math.floor(new Date().getTime() / 1000 + REFRESH_TOKEN_EXPIRATION_TIME))
})
