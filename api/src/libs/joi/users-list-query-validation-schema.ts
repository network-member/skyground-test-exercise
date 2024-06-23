import Joi from 'joi'

export const USERS_LIST_QUERY_VALIDATION_SCHEMA = Joi.object({
  limit: Joi.number().required(),
  offset: Joi.number().required(),
})
