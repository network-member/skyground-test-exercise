import type { ReactElement } from 'react'

import { Field } from 'react-final-form'

import { EmailInput, PasswordInput } from '@/components/controls'
import { emailValidator, passwordValidator } from '@/utils/form-validators'

export interface FormValues {
  email: string
  password: string
}

export function FormFields(): ReactElement {
  return (
    <>
      <Field<FormValues['email']> name="email" validate={emailValidator}>
        {({ input, meta: { error, touched } }) => (
          <EmailInput {...input} error={error && touched ? error : undefined} />
        )}
      </Field>
      <Field<FormValues['password']> name="password" validate={passwordValidator}>
        {({ input, meta: { error, touched } }) => (
          <PasswordInput {...input} error={error && touched ? error : undefined} />
        )}
      </Field>
    </>
  )
}
