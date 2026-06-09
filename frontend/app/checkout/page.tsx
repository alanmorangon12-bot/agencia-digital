'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { CardElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '')

function PaymentForm() {
  const stripe = useStripe()
  const elements = useElements()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!stripe || !elements) return

    setLoading(true)
    setError('')

    try {
      const cardElement = elements.getElement(CardElement)
      if (!cardElement) return

      const { error: paymentError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
      })

      if (paymentError) {
        setError(paymentError.message || 'Erro no pagamento')
      } else {
        setSuccess(true)
        setTimeout(() => {
          window.location.href = '/dashboard'
        }, 2000)
      }
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handlePayment} className="space-y-6">
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg">
          {error}
        </div>
      )}
      {success && (
        <div className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg">
          Pagamento realizado com sucesso! Redirecionando...
        </div>
      )}

      <div className="glass-effect p-6 rounded-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#fff',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#fa755a',
              },
            },
          }}
        />
      </div>

      <button
        type="submit"
        disabled={loading || !stripe}
        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? 'Processando...' : 'Confirmar Pagamento'}
      </button>
    </form>
  )
}

export default function Checkout() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80">
            Agência Digital
          </Link>
        </div>
      </nav>

      {/* Checkout */}
      <section className="py-20 px-6 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold gradient-text mb-12 text-center">💳 Checkout</h1>

          <div className="glass-effect p-8 rounded-lg mb-8">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-4">Resumo do Pedido</h2>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Serviço:</span>
                  <span>Criação de Website</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantidade:</span>
                  <span>1</span>
                </div>
                <div className="border-t border-gray-700 pt-2 mt-2 flex justify-between font-bold text-white">
                  <span>Total:</span>
                  <span>R$ 2.000,00</span>
                </div>
              </div>
            </div>
          </div>

          <Elements stripe={stripePromise}>
            <PaymentForm />
          </Elements>
        </motion.div>
      </section>
    </main>
  )
}
