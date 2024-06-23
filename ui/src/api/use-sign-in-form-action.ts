import { useCallback } from 'react'

import type { AxiosResponse } from 'axios'
import { useNavigate } from 'react-router-dom'

import { saveLoginResponseToLocalStorage } from '@/utils/local-storage'

import { publicApiClient } from './client'
import { convertErrorsToFormSubmitMessage } from './utils/convert-errors-to-form-submit-message'
import { parseApiError } from './utils/parse-api-error'

interface Args {
  email: string
  password: string
}

interface Result {
  id: number
  email: string
  fullName: string
  createdAt: string
  updatedAt: string
  refreshToken: string
  accessTokenExpiresIn: number
}

export function useSignInFormAction(): (payload: Args) => void {
  const navigate = useNavigate()

  return useCallback(
    async (payload: Args) => {
      try {
        const signInResponse = await publicApiClient.post<Args, AxiosResponse<Result>>('auth/sign-in', payload)
        saveLoginResponseToLocalStorage(signInResponse.data)
        navigate('/')
      } catch (err) {
        const { errors } = parseApiError(err)
        return convertErrorsToFormSubmitMessage(errors)
      }
    },
    [navigate],
  )
}
