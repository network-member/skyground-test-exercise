import Joi from 'joi'

function validatePasswordCharacters(value: string) {
  const charactersArray = value.replace(/\s/g, '').split('')
  const valueHasNumber = charactersArray.find((character) => !Number.isNaN(Number(character)))
  const valueHasCharacter = charactersArray.find((character) => Number.isNaN(Number(character)))

  if (!valueHasCharacter || !valueHasNumber) {
    throw Error('Password must contain at least one number and at least one character.')
  }
}

export const SIGN_UP_BODY_VALIDATION_SCHEMA = Joi.object({
  fullName: Joi.string().min(5).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required().custom(validatePasswordCharacters),
}).strict()
