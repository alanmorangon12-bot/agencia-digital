import express from 'express'
import { authMiddleware } from '../middleware/auth'
import stripe from '../utils/stripe'

const router = express.Router()

// Create payment intent
router.post('/create-intent', authMiddleware, async (req, res) => {
  try {
    const { amount, servico_id } = req.body

    if (!amount || !servico_id) {
      return res.status(400).json({ erro: 'Amount e servico_id obrigatórios' })
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Stripe usa centavos
      currency: 'brl',
      metadata: {
        user_id: req.userId,
        servico_id: servico_id,
      },
    })

    res.json({
      client_secret: paymentIntent.client_secret,
      amount: paymentIntent.amount,
    })
  } catch (error: any) {
    res.status(500).json({ erro: error.message })
  }
})

// Confirm payment
router.post('/confirm', authMiddleware, async (req, res) => {
  try {
    const { payment_intent_id } = req.body

    if (!payment_intent_id) {
      return res.status(400).json({ erro: 'payment_intent_id obrigatório' })
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(payment_intent_id)

    if (paymentIntent.status === 'succeeded') {
      // TODO: Update order status in database
      res.json({
        sucesso: true,
        mensagem: 'Pagamento confirmado com sucesso!',
        payment_id: paymentIntent.id,
      })
    } else {
      res.status(400).json({ erro: 'Pagamento não confirmado' })
    }
  } catch (error: any) {
    res.status(500).json({ erro: error.message })
  }
})

export default router
