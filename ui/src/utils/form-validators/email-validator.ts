import { trim } from 'lodash'

export function emailValidator(value?: string): string | undefined {
  const trimmedValue = trim(value)
  if (!trimmedValue) return 'Email is required.'
}
