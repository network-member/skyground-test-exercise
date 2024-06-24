import type { ReactElement } from 'react'

import { Form } from 'react-final-form'
import { Link } from 'react-router-dom'

import { useSignUpFormAction } from '@/api'
import { Button } from '@/components/controls'

import { FormFields } from './components/FormFields'
import type { FormValues } from './components/FormFields'
import { Wrapper, Container, FormContainer, SubmitError } from './styles'

export function SignUpPage(): ReactElement {
  const signUp = useSignUpFormAction()

  return (
    <Wrapper>
      <Container>
        <h1>Sign up</h1>
        <Form<FormValues>
          onSubmit={signUp}
          render={({ handleSubmit, submitError, submitting }) => (
            <FormContainer onSubmit={handleSubmit}>
              <FormFields />
              <div>
                Have you already registered? Sign-in <Link to="/sign-in">here</Link>
              </div>
              {submitError ? <SubmitError>{submitError}</SubmitError> : null}
              <Button type="submit" disabled={submitting}>
                Sign up
              </Button>
            </FormContainer>
          )}
        />
      </Container>
    </Wrapper>
  )
}
