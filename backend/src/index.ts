import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running' })
})

// Services routes
app.get('/api/servicos', (req, res) => {
  const servicos = [
    {
      id: 1,
      titulo: 'Tráfego Pago',
      descricao: 'Campanhas em Google Ads, Facebook e Instagram com ROI garantido',
      preco: 'Sob orçamento',
      icon: '📊'
    },
    {
      id: 2,
      titulo: 'Criação de Sites',
      descricao: 'Websites modernos, responsivos e otimizados para conversão',
      preco: 'Sob orçamento',
      icon: '🌐'
    },
    {
      id: 3,
      titulo: 'Design Gráfico',
      descricao: 'Imagens personalizadas, banners e materiais visuais profissionais',
      preco: 'Sob orçamento',
      icon: '🎨'
    },
    {
      id: 4,
      titulo: 'Criação de Logos',
      descricao: 'Identidade visual única e memorável para sua marca',
      preco: 'Sob orçamento',
      icon: '✨'
    },
    {
      id: 5,
      titulo: 'Promoção de Sites',
      descricao: 'SEO, SEM e estratégias de marketing para aumentar visibilidade',
      preco: 'Sob orçamento',
      icon: '🚀'
    },
    {
      id: 6,
      titulo: 'Desenvolvimento de Apps',
      descricao: 'Aplicativos mobile e web com tecnologia de ponta',
      preco: 'Sob orçamento',
      icon: '📱'
    }
  ]
  res.json(servicos)
})

// Contato route
app.post('/api/contato', (req, res) => {
  const { nome, email, telefone, mensagem } = req.body

  if (!nome || !email || !mensagem) {
    return res.status(400).json({ erro: 'Campos obrigatórios faltando' })
  }

  // TODO: Implementar envio de email
  console.log('Novo contato:', { nome, email, telefone, mensagem })

  res.json({ sucesso: true, mensagem: 'Mensagem enviada com sucesso!' })
})

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`)
})
