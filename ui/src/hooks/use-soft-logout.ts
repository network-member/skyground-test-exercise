import { useCallback } from 'react'

import { useNavigate } from 'react-router-dom'

import { cleanUserInfo } from '@/utils/local-storage'

export function useSoftLogout(): () => void {
  const navigate = useNavigate()

  return useCallback(() => {
    cleanUserInfo()
    navigate('/sign-in')
  }, [navigate])
}
