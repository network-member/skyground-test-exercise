import { rgba } from 'polished'
import styled from 'styled-components'

import { Button } from '@/components/controls'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  padding: 50px 20px 30px;
`

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`

export const WelcomeMessage = styled.div`
  font-size: 18px;
  & > span {
    text-decoration: underline;
    cursor: pointer;
  }
  width: 100%;
  text-align: right;
`

export const Table = styled.table`
  border-collapse: collapse;
  border: 2px solid ${(props) => rgba(props.theme.colors.neutralBackground, 0.95)};
  letter-spacing: 1px;
  empty-cells: show;
`

export const Th = styled.th`
  border: 1px solid ${(props) => props.theme.colors.neutralBackground};
  padding: 10px 20px;
  background-color: ${(props) => rgba(props.theme.colors.neutralBackground, 0.55)};
`

export const Td = styled.td`
  border: 1px solid ${(props) => props.theme.colors.neutralBackground};
  padding: 10px 20px;
  text-align: center;
  min-height: 40px;

  &:empty {
    &::before {
      content: '\u00a0';
      visibility: hidden;
    }
  }
`

export const Tr = styled.tr`
  &:nth-child(even) > ${Td} {
    background-color: ${(props) => rgba(props.theme.colors.neutralBackground, 0.4)};
  }

  &:nth-child(odd) > ${Td} {
    background-color: ${(props) => rgba(props.theme.colors.neutralBackground, 0.45)};
  }
`

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`

export const PaginationButton = styled(Button)`
  width: 40%;
  font-weight: 600;
`

export const TotalCountLabel = styled.div`
  vertical-align: middle;
`
