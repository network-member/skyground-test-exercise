import type { ReactElement } from 'react'

import { Field } from 'react-final-form'

import { EmailInput, PasswordInput, NameInput } from '@/components/controls'
import { emailValidator, fullNameValidator, passwordValidator } from '@/utils/form-validators'

export interface FormValues {
  email: string
  fullName: string
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
      <Field<FormValues['fullName']> name="fullName" validate={fullNameValidator}>
        {({ input, meta: { error, touched } }) => <NameInput {...input} error={error && touched ? error : undefined} />}
      </Field>
      <Field<FormValues['password']> name="password" validate={passwordValidator}>
        {({ input, meta: { error, touched } }) => (
          <PasswordInput {...input} error={error && touched ? error : undefined} />
        )}
      </Field>
    </>
  )
}
