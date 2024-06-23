import { Router } from 'express'

import {
  SIGN_UP_BODY_VALIDATION_SCHEMA,
  SIGN_IN_BODY_VALIDATION_SCHEMA,
  REFRESH_TOKEN_BODY_VALIDATION_SCHEMA,
} from '~/libs/joi'
import { bodyValidationMiddlewareFactory, asyncMiddlewareWrapper, authenticationMiddlewareFactory } from '~/middleware'
import * as AuthControllerService from '~/services/auth-controller'

const router = Router()

router.post(
  '/sign-up',
  bodyValidationMiddlewareFactory(SIGN_UP_BODY_VALIDATION_SCHEMA),
  asyncMiddlewareWrapper(AuthControllerService.signUp),
)

router.post(
  '/sign-in',
  bodyValidationMiddlewareFactory(SIGN_IN_BODY_VALIDATION_SCHEMA),
  asyncMiddlewareWrapper(AuthControllerService.signIn),
)

router.post(
  '/refresh-token',
  bodyValidationMiddlewareFactory(REFRESH_TOKEN_BODY_VALIDATION_SCHEMA),
  authenticationMiddlewareFactory({ ignoreExpiration: true }),
  asyncMiddlewareWrapper(AuthControllerService.refreshToken),
)

router.post('/logout', authenticationMiddlewareFactory(), asyncMiddlewareWrapper(AuthControllerService.logout))

export default router
