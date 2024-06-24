import jwt from 'jsonwebtoken'

import config from '~/config'

const ACCESS_TOKEN_EXPIRATION_TIME = 5 * 60 // 5 minutes

export function generateAccessToken(payload: { userId: number }) {
  const accessTokenExpiresIn = Math.floor(Date.now() / 1000) + ACCESS_TOKEN_EXPIRATION_TIME
  const accessToken = jwt.sign({ ...payload, exp: accessTokenExpiresIn }, config.jwtSecret)

  return { accessToken, accessTokenExpiresIn }
}
