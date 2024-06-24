import type { ReactElement } from 'react'
import { useState, useMemo, useCallback } from 'react'

import { useUsersList, useLogoutAction } from '@/api'
import type { UserDto } from '@/api'
import { getUserInfo } from '@/utils/local-storage'

import {
  Container,
  Wrapper,
  Table,
  TableWrapper,
  WelcomeMessage,
  PaginationContainer,
  PaginationButton,
  TotalCountLabel,
  Th,
  Tr,
  Td,
} from './styles'

export function HomePage(): ReactElement {
  const logout = useLogoutAction()
  const [paginationParams, setPaginationParams] = useState({ limit: 10, offset: 0 })
  const handlePreviousPageClick = useCallback(
    () => setPaginationParams({ ...paginationParams, offset: paginationParams.offset - paginationParams.limit }),
    [paginationParams],
  )
  const handleNextPageClick = useCallback(
    () => setPaginationParams({ ...paginationParams, offset: paginationParams.offset + paginationParams.limit }),
    [paginationParams],
  )

  const currentUser = getUserInfo()

  const { items, totalCount } = useUsersList(paginationParams)
  const usersRows = useMemo(() => {
    const missingRowsCount = paginationParams.limit - items.length
    const users = missingRowsCount ? items.concat(new Array(missingRowsCount).fill({})) : items
    return users.map((user, index) => <TableRow key={`${user.id}-${index}`} user={user} />)
  }, [items, paginationParams.limit])

  return (
    <Wrapper>
      <Container>
        <WelcomeMessage>
          Welcome {currentUser?.fullName}! To logout click <span onClick={logout}>here</span>.
        </WelcomeMessage>
        <TableWrapper>
          <h1>Users</h1>
          <Table>
            <TableHeaderRow />
            <tbody>{usersRows}</tbody>
          </Table>
        </TableWrapper>
        <PaginationContainer>
          <PaginationButton
            onClick={handlePreviousPageClick}
            disabled={paginationParams.offset - paginationParams.limit < 0}
          >
            Previous page
          </PaginationButton>
          <TotalCountLabel>{`Total count: ${totalCount}`}</TotalCountLabel>
          <PaginationButton
            onClick={handleNextPageClick}
            disabled={paginationParams.offset + paginationParams.limit >= totalCount}
          >
            Next page
          </PaginationButton>
        </PaginationContainer>
      </Container>
    </Wrapper>
  )
}

function TableRow({ user }: { user: Partial<UserDto> }): ReactElement {
  return (
    <Tr key={user.id}>
      <Td>{user.id}</Td>
      <Td>{user.email}</Td>
      <Td>{user.fullName}</Td>
      <Td>{user.createdAt}</Td>
      <Td>{user.updatedAt}</Td>
    </Tr>
  )
}

function TableHeaderRow(): ReactElement {
  return (
    <thead>
      <Tr>
        <Th>Id</Th>
        <Th>Email</Th>
        <Th>Full name</Th>
        <Th>Created at</Th>
        <Th>Updated at</Th>
      </Tr>
    </thead>
  )
}
