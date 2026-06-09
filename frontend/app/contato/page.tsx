'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contato`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccess(true)
        setFormData({ nome: '', email: '', telefone: '', mensagem: '' })
        setTimeout(() => setSuccess(false), 5000)
      } else {
        setError('Erro ao enviar mensagem. Tente novamente.')
      }
    } catch (err) {
      setError('Erro de conexão. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80">Agência Digital</Link>
          <div className="hidden md:flex gap-8">
            <Link href="/servicos" className="hover:text-cyan-400 transition">Serviços</Link>
            <Link href="/portfolio" className="hover:text-cyan-400 transition">Portfolio</Link>
            <Link href="/contato" className="hover:text-cyan-400 transition font-semibold">Contato</Link>
          </div>
          <button className="btn-primary text-sm">Solicitar Orçamento</button>
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
          Entre em Contato
        </motion.h1>
        <p className="text-gray-400 text-lg">Vamos conversar sobre seu projeto</p>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6 max-w-3xl mx-auto">
        <motion.div
          className="glass-effect p-8 md:p-12 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {success && (
              <div className="bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg">
                Mensagem enviada com sucesso! Em breve entraremos em contato.
              </div>
            )}
            {error && (
              <div className="bg-red-500/20 border border-red-500 text-red-400 p-4 rounded-lg">
                {error}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Nome *</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Telefone</label>
              <input
                type="tel"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Mensagem *</label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-white/5 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none"
                placeholder="Descreva seu projeto..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-12 pt-12 border-t border-gray-700 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl mb-3">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <a href="mailto:contato@agenciadigital.com" className="text-cyan-400 hover:text-cyan-300">
                contato@agenciadigital.com
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Telefone</h3>
              <a href="tel:+5511999999999" className="text-cyan-400 hover:text-cyan-300">
                (11) 99999-9999
              </a>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-semibold mb-2">Localização</h3>
              <p className="text-gray-400">São Paulo, SP - Brasil</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6 text-center text-gray-500">
        <p>&copy; 2024 Agência Digital. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
