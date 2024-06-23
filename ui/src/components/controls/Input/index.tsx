import type { ReactElement } from 'react'

import type { FieldInputProps } from 'react-final-form'

import EmailAdornment from './assets/email-adornment.svg'
import NameAdornment from './assets/name-adornment.svg'
import PasswordAdornment from './assets/password-adornment.svg'
import { InputGroup, Control, Adornment, Wrapper, Error } from './styles'

interface BaseInputProps<T> extends FieldInputProps<T> {
  className?: string
  error?: string
}

interface InputProps<T> extends BaseInputProps<T> {
  adornment: ReactElement
  placeholder: string
  type?: string
}

export function Input<T extends string | number>({
  adornment,
  className,
  error,
  ...inputArgs
}: InputProps<T>): ReactElement {
  return (
    <Wrapper>
      <InputGroup className={className}>
        <Adornment>{adornment}</Adornment>
        <Control {...inputArgs} />
      </InputGroup>
      {error ? <Error>{error}</Error> : null}
    </Wrapper>
  )
}

export function EmailInput(props: BaseInputProps<string>): ReactElement {
  return <Input {...props} adornment={<EmailAdornment width="25" />} type="email" placeholder="Email" />
}

export function NameInput(props: BaseInputProps<string>): ReactElement {
  return <Input {...props} adornment={<NameAdornment width="25" />} placeholder="Full name" />
}

export function PasswordInput(props: BaseInputProps<string>): ReactElement {
  return <Input {...props} adornment={<PasswordAdornment width="25" />} type="password" placeholder="Password" />
}
