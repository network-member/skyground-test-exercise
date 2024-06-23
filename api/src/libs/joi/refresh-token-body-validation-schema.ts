import Joi from 'joi'

export const REFRESH_TOKEN_BODY_VALIDATION_SCHEMA = Joi.object({
  refreshToken: Joi.string().required(),
}).strict()
