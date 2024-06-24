import type { ReactElement } from 'react'

import { Form } from 'react-final-form'
import { Link } from 'react-router-dom'

import { useSignInFormAction } from '@/api'
import { Button } from '@/components/controls'

import { FormFields } from './components/FormFields'
import type { FormValues } from './components/FormFields'
import { Wrapper, Container, FormContainer, SubmitError } from './styles'

export function SignInPage(): ReactElement {
  const signIn = useSignInFormAction()

  return (
    <Wrapper>
      <Container>
        <h1>Sign in</h1>
        <Form<FormValues>
          onSubmit={signIn}
          render={({ handleSubmit, submitError, submitting }) => (
            <FormContainer onSubmit={handleSubmit}>
              <FormFields />
              <div>
                Still don't have an account ? Sign-up <Link to="/sign-up">here</Link>
              </div>
              {submitError ? <SubmitError>{submitError}</SubmitError> : null}
              <Button type="submit" disabled={submitting}>
                Sign in
              </Button>
            </FormContainer>
          )}
        />
      </Container>
    </Wrapper>
  )
}
