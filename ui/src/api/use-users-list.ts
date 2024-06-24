import { useState, useEffect } from 'react'

import axios from 'axios'

import { useSoftLogout } from '@/hooks/use-soft-logout'

import { privateApiClient } from './client'
import { SoftLogoutError } from './errors'
import { parseApiError } from './utils/parse-api-error'

interface Args {
  limit: number
  offset: number
}

export interface UserDto {
  id: number
  email: string
  fullName: string
  createdAt: string
  updatedAt: string
}

interface Result {
  items: UserDto[]
  totalCount: number
}

export function useUsersList(paginationParams: Args): Result {
  const performSoftLogout = useSoftLogout()
  const [users, setUsers] = useState<Result>({ items: [], totalCount: 0 })

  useEffect(() => {
    privateApiClient
      .get<Result>('/users', { params: paginationParams })
      .then(({ data }) => {
        setUsers(data)
      })
      .catch((err) => {
        if (err instanceof SoftLogoutError) return performSoftLogout()

        const { statusCode } = parseApiError(err)
        if (statusCode === axios.HttpStatusCode.Unauthorized) return performSoftLogout()

        throw err
      })
  }, [paginationParams, performSoftLogout])

  return users
}
