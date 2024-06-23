import Joi from 'joi'

export const SIGN_IN_BODY_VALIDATION_SCHEMA = Joi.object({
  email: Joi.string().required().trim(),
  password: Joi.string().required(),
})
