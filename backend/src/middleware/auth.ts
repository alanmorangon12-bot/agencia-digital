import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'

const JWT_SECRET = process.env.JWT_SECRET || 'seu_segredo_super_seguro'

declare global {
  namespace Express {
    interface Request {
      userId?: string | number
      user?: any
    }
  }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.replace('Bearer ', '')

  if (!token) {
    return res.status(401).json({ erro: 'Token não fornecido' })
  }

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET)
    req.userId = decoded.id
    req.user = decoded
    next()
  } catch (error) {
    res.status(401).json({ erro: 'Token inválido' })
  }
}
