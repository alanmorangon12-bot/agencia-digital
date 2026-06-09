'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function SEOOptimization() {
  const [seoData] = useState([
    { metric: 'Meta Tags', status: '✅ Completo', score: 95 },
    { metric: 'Performance', status: '⚡ Otimizado', score: 92 },
    { metric: 'Mobile', status: '📱 Responsivo', score: 98 },
    { metric: 'Segurança', status: '🔒 Seguro', score: 96 },
    { metric: 'SEO', status: '🔍 Otimizado', score: 94 },
    { metric: 'Acessibilidade', status: '♿ Acessível', score: 91 },
  ])

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80">
            Agência Digital
          </Link>
          <div className="hidden md:flex gap-8">
            <Link href="/servicos" className="hover:text-cyan-400 transition">Serviços</Link>
            <Link href="/seo" className="hover:text-cyan-400 transition font-semibold">SEO</Link>
            <Link href="/contato" className="hover:text-cyan-400 transition">Contato</Link>
          </div>
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
          🔍 SEO Otimizado
        </motion.h1>
        <p className="text-gray-400 text-lg">Todos os sites são desenvolvidos com as melhores práticas de SEO</p>
      </section>

      {/* SEO Metrics */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {seoData.map((item, index) => (
            <motion.div
              key={index}
              className="glass-effect p-6 rounded-lg"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold">{item.metric}</h3>
                <span className="text-2xl">{item.score}%</span>
              </div>
              <p className="text-cyan-400 text-sm font-semibold mb-4">{item.status}</p>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${item.score}%` }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                />
              </div>
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
