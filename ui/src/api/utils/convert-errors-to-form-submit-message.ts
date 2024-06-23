import { FORM_ERROR } from 'final-form'

const DEFAULT_ERROR_MESSAGE = 'Something went wrong.'

export function convertErrorsToFormSubmitMessage(errors: string[] | null): { 'FINAL_FORM/form-error': string } {
  if (!errors) return { [FORM_ERROR]: DEFAULT_ERROR_MESSAGE }

  const compositeError = errors.join('\n')
  return { [FORM_ERROR]: compositeError }
}
