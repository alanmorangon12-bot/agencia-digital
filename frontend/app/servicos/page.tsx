'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Service {
  id: number
  titulo: string
  descricao: string
  preco: string
  icon: string
}

export default function Servicos() {
  const [servicos, setServicos] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchServicos = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/servicos`)
        const data = await response.json()
        setServicos(data)
      } catch (error) {
        console.error('Erro ao buscar serviços:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchServicos()
  }, [])

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80">Agência Digital</Link>
          <div className="hidden md:flex gap-8">
            <Link href="/servicos" className="hover:text-cyan-400 transition font-semibold">Serviços</Link>
            <Link href="/portfolio" className="hover:text-cyan-400 transition">Portfolio</Link>
            <Link href="/contato" className="hover:text-cyan-400 transition">Contato</Link>
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
          Nossos Serviços
        </motion.h1>
        <p className="text-gray-400 text-lg">Soluções completas para transformar seu negócio digital</p>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        {loading ? (
          <div className="text-center text-gray-400">Carregando serviços...</div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicos.map((service, index) => (
              <motion.div
                key={service.id}
                className="glass-effect p-8 rounded-lg hover:border-cyan-400 transition group cursor-pointer"
                whileHover={{ y: -15, boxShadow: '0 20px 50px rgba(0, 217, 255, 0.2)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition transform">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{service.titulo}</h3>
                <p className="text-gray-400 mb-6">{service.descricao}</p>
                <div className="flex justify-between items-center">
                  <span className="text-cyan-400 font-semibold">{service.preco}</span>
                  <button className="btn-primary text-sm">Saiba Mais</button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6 text-center text-gray-500">
        <p>&copy; 2024 Agência Digital. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
