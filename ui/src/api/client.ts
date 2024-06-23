import axios from 'axios'
import type { AxiosResponse } from 'axios'

import { getTokensInfo, setAccessTokenExpiresInTimestamp } from '@/utils/local-storage'

import { SoftLogoutError } from './errors'

const ACCESS_TOKEN_LIFETIME_GAP = 5 // 5 seconds
const AXIOS_CONFIG = { baseURL: process.env.API_URL, timeout: 2000, withCredentials: true }

export const publicApiClient = axios.create(AXIOS_CONFIG)
export const privateApiClient = axios.create(AXIOS_CONFIG)

privateApiClient.interceptors.request.use(async (config) => {
  const { refreshToken, accessTokenExpiresIn } = getTokensInfo()
  if (!refreshToken || !accessTokenExpiresIn) throw new SoftLogoutError()

  const isExpired = Number(accessTokenExpiresIn) - new Date().getTime() / 1000 - ACCESS_TOKEN_LIFETIME_GAP < 0
  if (!isExpired) return config

  const { data } = await publicApiClient.post<
    { refreshToken: string },
    AxiosResponse<{ accessTokenExpiresIn: number }>
  >('/auth/refresh-token', { refreshToken }, { withCredentials: true })
  setAccessTokenExpiresInTimestamp(data.accessTokenExpiresIn)

  return config
})
