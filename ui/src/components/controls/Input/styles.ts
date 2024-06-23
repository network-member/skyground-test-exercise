import styled from 'styled-components'

export const Adornment = styled.div`
  text-align: center;
  padding: 8px 12px;
  line-height: 25px;
  color: #99a3ba;
  background: #eef4ff;
  border: #cdd9ed;
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
  border: 1px solid #cdd9ed;
  background: #fff;
  transition: border 0.3s ease;
  z-index: 1;
  flex: 1 1 auto;
  margin-top: 0;
  margin-bottom: 0;
  margin-left: -1px;
  white-space: nowrap;
  border-radius: 0 6px 6px 0;

  &::placeholder {
    color: #cbd1dc;
  }
  &:focus {
    outline: none;
    border-color: #275efe;
  }
`

export const InputGroup = styled.div`
  display: flex;

  &:focus-within {
    & > ${Adornment} {
      color: #fff;
      background: #678efe;
      border-color: #275efe;
    }
  }
`

export const Wrapper = styled.div`
  width: 100%;
`

export const Error = styled.div`
  font-size: 12px;
  margin-top: 10px;
  color: #ba3939;
  text-indent: 10px;
`
