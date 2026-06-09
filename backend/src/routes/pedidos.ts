import express from 'express'
import { authMiddleware } from '../middleware/auth'

const router = express.Router()

// Mock database
const pedidos: any[] = []

// Create order
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { servico_id, descricao } = req.body

    if (!servico_id) {
      return res.status(400).json({ erro: 'Serviço obrigatório' })
    }

    const pedido = {
      id: Date.now(),
      user_id: req.userId,
      servico_id,
      descricao,
      status: 'pendente',
      createdAt: new Date(),
    }

    pedidos.push(pedido)

    res.json({
      sucesso: true,
      pedido,
      mensagem: 'Pedido criado com sucesso! Em breve entraremos em contato.',
    })
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao criar pedido' })
  }
})

// Get user orders
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userPedidos = pedidos.filter(p => p.user_id === req.userId)
    res.json(userPedidos)
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao buscar pedidos' })
  }
})

export default router
