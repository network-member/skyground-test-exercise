import Joi from 'joi'

interface Config {
  databaseUrl: string
  port: number
  jwtSecret: string
  allowedDomains: string[]
}

const CONFIG_VALIDATION_SCHEMA = Joi.object<Config>({
  databaseUrl: Joi.string().required(),
  port: Joi.number().required(),
  jwtSecret: Joi.string().required(),
  allowedDomains: Joi.array().items(Joi.string()).required(),
})

const ALLOWED_DOMAINS = process.env.ALLOWED_DOMAINS

const CONFIG = {
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT ?? 4000,
  jwtSecret: process.env.JWT_SECRET,
  allowedDomains: ALLOWED_DOMAINS ? ALLOWED_DOMAINS.split(', ') : null,
}

export default Joi.attempt(CONFIG, CONFIG_VALIDATION_SCHEMA)
