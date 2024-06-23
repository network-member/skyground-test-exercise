import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > :not(:first-child) {
    margin-top: 15px;
  }
`

export const SubmitError = styled.div`
  font-size: 12px;
  color: #ba3939;
  white-space: pre-wrap;
`
