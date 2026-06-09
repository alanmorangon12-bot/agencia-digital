import express from 'express'
const router = express.Router()

const newsletters: string[] = []

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).json({ erro: 'Email obrigatório' })
    }

    // Check if already subscribed
    if (newsletters.includes(email)) {
      return res.status(400).json({ erro: 'Email já inscrito' })
    }

    newsletters.push(email)

    // TODO: Send welcome email
    console.log('Newsletter subscribe:', email)

    res.json({
      sucesso: true,
      mensagem: 'Inscrição realizada com sucesso!',
    })
  } catch (error) {
    res.status(500).json({ erro: 'Erro ao se inscrever' })
  }
})

// Get subscribers count
router.get('/count', (req, res) => {
  res.json({
    count: newsletters.length,
  })
})

export default router
