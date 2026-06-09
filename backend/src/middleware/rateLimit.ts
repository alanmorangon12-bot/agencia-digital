import express from 'express'
const router = express.Router()

interface RateLimit {
  [key: string]: { count: number; resetTime: number }
}

const rateLimitStore: RateLimit = {}

export const rateLimitMiddleware = (maxRequests = 100, windowMs = 15 * 60 * 1000) => {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const ip = req.ip || 'unknown'
    const now = Date.now()

    if (!rateLimitStore[ip]) {
      rateLimitStore[ip] = { count: 1, resetTime: now + windowMs }
      return next()
    }

    if (now > rateLimitStore[ip].resetTime) {
      rateLimitStore[ip] = { count: 1, resetTime: now + windowMs }
      return next()
    }

    if (rateLimitStore[ip].count >= maxRequests) {
      return res.status(429).json({ erro: 'Muitas requisições. Tente novamente mais tarde.' })
    }

    rateLimitStore[ip].count++
    next()
  }
}

export default router
