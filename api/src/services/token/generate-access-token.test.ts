import jwt from 'jsonwebtoken'

import config from '~/config'

import { generateAccessToken } from './generate-access-token'

test('Generate access token', () => {
  const userId = 1
  const { accessToken, accessTokenExpiresIn } = generateAccessToken({ userId })
  const tokenPayload = jwt.verify(accessToken, config.jwtSecret) as jwt.JwtPayload
  expect(tokenPayload.userId).toBe(userId)
  expect(tokenPayload.exp).toBe(accessTokenExpiresIn)
})
