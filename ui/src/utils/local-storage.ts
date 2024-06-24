interface LoginResponse {
  email: string
  fullName: string
  refreshToken: string
  accessTokenExpiresIn: number
}

export function saveLoginResponseToLocalStorage(response: LoginResponse): void {
  const { email, fullName, refreshToken, accessTokenExpiresIn } = response
  localStorage.setItem('user', JSON.stringify({ email, fullName }))
  localStorage.setItem('refreshToken', refreshToken)
  setAccessTokenExpiresInTimestamp(accessTokenExpiresIn)
}

export function getTokensInfo(): { refreshToken: string | null; accessTokenExpiresIn: string | null } {
  const refreshToken = localStorage.getItem('refreshToken')
  const accessTokenExpiresIn = localStorage.getItem('accessTokenExpiresIn')

  return { refreshToken, accessTokenExpiresIn }
}

export function setAccessTokenExpiresInTimestamp(timestamp: number): void {
  localStorage.setItem('accessTokenExpiresIn', timestamp.toString())
}

export function cleanUserInfo(): void {
  localStorage.removeItem('user')
  localStorage.removeItem('refreshToken')
  localStorage.removeItem('accessTokenExpiresIn')
}

export function getUserInfo(): { email: string; fullName: string } | null {
  const user = localStorage.getItem('user')
  if (!user) return null

  return JSON.parse(user)
}
