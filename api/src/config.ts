import Joi from 'joi'

interface Config {
  databaseUrl: string
  port: number
  jwtSecret: string
}

const CONFIG_VALIDATION_SCHEMA = Joi.object<Config>({
  databaseUrl: Joi.string().required(),
  port: Joi.number().required(),
  jwtSecret: Joi.string().required(),
})

const CONFIG = {
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT ?? 4000,
  jwtSecret: process.env.JWT_SECRET,
}

export default Joi.attempt(CONFIG, CONFIG_VALIDATION_SCHEMA)
