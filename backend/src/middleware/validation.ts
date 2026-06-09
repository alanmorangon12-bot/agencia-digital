import express from 'express'
const router = express.Router()

// Input validation middleware
export const validateInput = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  // Sanitize inputs
  Object.keys(req.body).forEach(key => {
    if (typeof req.body[key] === 'string') {
      req.body[key] = req.body[key]
        .trim()
        .replace(/[<>]/g, '') // Remove potential XSS
        .substring(0, 500) // Limit length
    }
  })
  next()
}

// Email validation
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Password validation
export const validatePassword = (password: string): boolean => {
  return password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)
}

export default router
