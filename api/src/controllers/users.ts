import { Router } from 'express'

import { USERS_LIST_QUERY_VALIDATION_SCHEMA } from '~/libs/joi'
import { asyncMiddlewareWrapper, authenticationMiddlewareFactory, queryValidationMiddlewareFactory } from '~/middleware'
import * as UsersControllerService from '~/services/users-controller'

const router = Router()
router.use(authenticationMiddlewareFactory())

router.get(
  '/',
  queryValidationMiddlewareFactory(USERS_LIST_QUERY_VALIDATION_SCHEMA),
  asyncMiddlewareWrapper(UsersControllerService.getMany),
)

export default router
