export function passwordValidator(value?: string): string | undefined {
  if (!value) return 'Password is required.'
  if (value.length < 8) return 'Password must contain at least 8 characters.'

  const valueWithoutWhitespace = value.replace(/\s/g, '').split('')
  const valueHasNumber = valueWithoutWhitespace.find((character) => !Number.isNaN(Number(character)))
  const valueHasCharacter = valueWithoutWhitespace.find((character) => Number.isNaN(Number(character)))
  if (!valueHasCharacter || !valueHasNumber) {
    return 'Password must contain at least one number and at least one character.'
  }
}
