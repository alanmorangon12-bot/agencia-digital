import express from 'express'
import { authMiddleware } from '../middleware/auth'

const router = express.Router()

const posts = [
  {
    id: 1,
    titulo: 'Como Maximizar ROI com Google Ads',
    resumo: 'Dicas e estratégias para melhorar seus resultados',
    conteudo: 'Conteúdo completo...',
    autor: 'João Silva',
    data: '2024-06-09',
    categoria: 'Marketing Digital',
  },
  {
    id: 2,
    titulo: 'Tendências de Design em 2024',
    resumo: 'Conheça as principais tendências de design',
    conteudo: 'Conteúdo completo...',
    autor: 'Maria Santos',
    data: '2024-06-08',
    categoria: 'Design',
  },
]

// Get all posts
router.get('/', (req, res) => {
  res.json(posts)
})

// Get single post
router.get('/:id', (req, res) => {
  const post = posts.find(p => p.id === Number(req.params.id))
  if (!post) {
    return res.status(404).json({ erro: 'Post não encontrado' })
  }
  res.json(post)
})

// Create post (admin only)
router.post('/', authMiddleware, (req, res) => {
  // TODO: Check if user is admin
  const { titulo, resumo, conteudo, categoria } = req.body

  if (!titulo || !resumo || !conteudo) {
    return res.status(400).json({ erro: 'Campos obrigatórios faltando' })
  }

  const newPost = {
    id: posts.length + 1,
    titulo,
    resumo,
    conteudo,
    categoria: categoria || 'Geral',
    autor: 'Admin', // TODO: Get from req.user
    data: new Date().toISOString().split('T')[0],
  }

  posts.push(newPost)
  res.json({ sucesso: true, post: newPost })
})

export default router
