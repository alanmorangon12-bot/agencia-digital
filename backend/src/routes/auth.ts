import express from 'express'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET || 'seu_segredo_super_seguro'

// Mock database
const users: any[] = []

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password, nome } = req.body

    if (!email || !password || !nome) {
      return res.status(400).json({ erro: 'Campos obrigatórios faltando' })
    }

    // Check if user exists
    const userExists = users.find(u => u.email === email)
    if (userExists) {
      return res.status(400).json({ erro: 'Usuário já existe' })
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 10)

    // Create user
    const user = {
      id: Date.now(),
      email,
      nome,
      password: hashedPassword,
      createdAt: new Date(),
    }

    users.push(user)

    // Generate token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '7d',
    })

    res.json({
      sucesso: true,
      token,
      user: { id: user.id, email: user.email, nome: user.nome },
    })
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao registrar' })
  }
})

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ erro: 'Email e senha obrigatórios' })
    }

    // Find user
    const user = users.find(u => u.email === email)
    if (!user) {
      return res.status(400).json({ erro: 'Usuário não encontrado' })
    }

    // Check password
    const passwordMatch = await bcryptjs.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(400).json({ erro: 'Senha incorreta' })
    }

    // Generate token
    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
      expiresIn: '7d',
    })

    res.json({
      sucesso: true,
      token,
      user: { id: user.id, email: user.email, nome: user.nome },
    })
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao fazer login' })
  }
})

export default router
