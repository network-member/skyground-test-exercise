import type { Request, Response, NextFunction } from 'express'

export function asyncMiddlewareWrapper(fn: (req: Request, res: Response, next: NextFunction) => unknown) {
  return function middleware(req: Request, res: Response, next: NextFunction) {
    return Promise.resolve(fn(req, res, next)).catch(next)
  }
}
