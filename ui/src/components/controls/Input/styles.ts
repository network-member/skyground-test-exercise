import { rgba } from 'polished'
import styled from 'styled-components'

export const Adornment = styled.div`
  text-align: center;
  padding: 8px 12px;
  line-height: 25px;
  background: ${(props) => rgba(props.theme.colors.primary, 0.2)};
  border: ${(props) => rgba(props.theme.colors.primary, 0.35)};
  transition:
    background 0.3s ease,
    border 0.3s ease,
    color 0.3s ease;
  white-space: nowrap;
  border-radius: 6px 0 0 6px;

  & > * {
    vertical-align: middle;
  }
`

export const Control = styled.input`
  width: 100%;
  padding: 8px 16px;
  line-height: 25px;
  font-weight: 500;
  border: 1px solid ${(props) => rgba(props.theme.colors.primary, 0.35)};
  background: ${(props) => props.theme.colors.alpha};
  transition: border 0.3s ease;
  z-index: 1;
  flex: 1 1 auto;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: -1px;
  white-space: nowrap;
  border-radius: 0 6px 6px 0;

  &::placeholder {
    color: ${(props) => props.theme.colors.neutral};
  }
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`

export const InputGroup = styled.div`
  display: flex;

  &:focus-within {
    & > ${Adornment} {
      color: ${(props) => props.theme.colors.alpha};
      background: ${(props) => rgba(props.theme.colors.primary, 0.65)};
      border-color: ${(props) => props.theme.colors.primary};
    }
  }
`

export const Wrapper = styled.div`
  width: 100%;
`

export const Error = styled.div`
  font-size: 12px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.error};
  text-indent: 10px;
`
