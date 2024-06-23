import 'express'

declare module 'express' {
  interface Request {
    auth?: {
      [key: string]: boolean | string | number
      userId: number
    }
  }
}
