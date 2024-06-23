import type { ReactElement } from 'react'
import { useState } from 'react'

import { useUsersList } from '@/api'

export function HomePage(): ReactElement {
  const [paginationParams, setPaginationParams] = useState({ limit: 20, offset: 0 })
  const users = useUsersList(paginationParams)
  console.log(users)
  return <div>Hello</div>
}
