import { Router } from 'express'

import authRouter from './auth'
import users from './users'

const router = Router()

router.use('/auth', authRouter)
router.use('/users', users)

export default router
