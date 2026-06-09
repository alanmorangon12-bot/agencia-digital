'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface PaymentMethod {
  id: string
  name: string
  icon: string
  price: string
}

export default function Pricing() {
  const [paymentMethods] = useState<PaymentMethod[]>([
    {
      id: 'traffic',
      name: 'Tráfego Pago',
      icon: '📊',
      price: 'A partir de R$ 500/mês'
    },
    {
      id: 'website',
      name: 'Criação de Site',
      icon: '🌐',
      price: 'A partir de R$ 2.000'
    },
    {
      id: 'design',
      name: 'Design Gráfico',
      icon: '🎨',
      price: 'A partir de R$ 800'
    },
    {
      id: 'logo',
      name: 'Criação de Logo',
      icon: '✨',
      price: 'A partir de R$ 1.500'
    },
    {
      id: 'seo',
      name: 'SEO Profissional',
      icon: '🚀',
      price: 'A partir de R$ 1.200/mês'
    },
    {
      id: 'app',
      name: 'Desenvolvimento de App',
      icon: '📱',
      price: 'Sob consultoria'
    },
  ])

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80">Agência Digital</Link>
          <div className="hidden md:flex gap-8">
            <Link href="/servicos" className="hover:text-cyan-400 transition">Serviços</Link>
            <Link href="/precos" className="hover:text-cyan-400 transition font-semibold">Preços</Link>
            <Link href="/contato" className="hover:text-cyan-400 transition">Contato</Link>
          </div>
          <Link href="/auth/login" className="btn-primary text-sm">Login</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl font-bold gradient-text mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Preços Transparentes
        </motion.h1>
        <p className="text-gray-400 text-lg">Escolha o plano perfeito para seu negócio</p>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.id}
              className="glass-effect p-8 rounded-lg border-2 border-transparent hover:border-cyan-400 transition"
              whileHover={{ y: -10, scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-6xl mb-4">{method.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{method.name}</h3>
              <p className="text-cyan-400 text-2xl font-bold mb-6">{method.price}</p>
              <button className="btn-primary w-full">
                Solicitar Orçamento
              </button>
              <p className="text-gray-400 text-sm mt-4 text-center">
                Consultoria gratuita
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center gradient-text mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          Perguntas Frequentes
        </motion.h2>

        <div className="space-y-4">
          {[
            {
              pergunta: 'Como funciona a consultoria gratuita?',
              resposta: 'Agendamos uma chamada de 30 minutos para entender suas necessidades e apresentar a melhor solução.'
            },
            {
              pergunta: 'Qual é o prazo de entrega?',
              resposta: 'Os prazos variam conforme a complexidade do projeto, mas geralmente começam em 2 semanas.'
            },
            {
              pergunta: 'Vocês oferecem suporte após a entrega?',
              resposta: 'Sim! Oferecemos suporte técnico e manutenção conforme o contrato acordado.'
            },
            {
              pergunta: 'É possível customizar um plano?',
              resposta: 'Absolutamente! Todos os nossos serviços podem ser customizados de acordo com sua necessidade.'
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass-effect p-6 rounded-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="font-bold text-lg mb-2">{item.pergunta}</h3>
              <p className="text-gray-400">{item.resposta}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6 text-center text-gray-500">
        <p>&copy; 2024 Agência Digital. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
