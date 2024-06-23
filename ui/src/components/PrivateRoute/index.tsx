import type { PropsWithChildren, ReactElement } from 'react'

import { Navigate } from 'react-router-dom'

import { getTokensInfo } from '@/utils/local-storage'

export function PrivateRoute({ children }: PropsWithChildren): ReactElement {
  const { refreshToken, accessTokenExpiresIn } = getTokensInfo()

  if (!refreshToken || !accessTokenExpiresIn) return <Navigate to="/sign-in" />

  return <>{children}</>
}
