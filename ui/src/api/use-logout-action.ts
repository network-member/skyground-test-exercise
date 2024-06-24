import { useCallback } from 'react'

import { useSoftLogout } from '@/hooks/use-soft-logout'

import { privateApiClient } from './client'

export function useLogoutAction(): () => void {
  const performSoftLogout = useSoftLogout()

  return useCallback(async () => {
    try {
      await privateApiClient.post('auth/logout')
      performSoftLogout()
    } catch {
      performSoftLogout()
    }
  }, [performSoftLogout])
}
