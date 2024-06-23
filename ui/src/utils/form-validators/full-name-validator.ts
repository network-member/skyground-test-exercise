import { trim } from 'lodash'

export function fullNameValidator(value?: string): string | undefined {
  const trimmedValue = trim(value)
  if (!trimmedValue) return 'Full name is required.'
  if (trimmedValue.length < 5) return 'Full name must contain at least 5 characters.'
}
