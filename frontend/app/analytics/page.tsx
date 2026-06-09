'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Analytics() {
  const [stats] = useState([
    { label: 'Usuários', value: 1234, change: '+12%' },
    { label: 'Pedidos', value: 456, change: '+8%' },
    { label: 'Receita', value: 'R$ 45.000', change: '+25%' },
    { label: 'Satisfação', value: '4.8/5', change: '+3%' },
  ])

  const [trafficData] = useState([
    { day: 'Seg', visitors: 120 },
    { day: 'Ter', visitors: 200 },
    { day: 'Qua', visitors: 150 },
    { day: 'Qui', visitors: 280 },
    { day: 'Sex', visitors: 320 },
    { day: 'Sab', visitors: 250 },
    { day: 'Dom', visitors: 180 },
  ])

  const maxVisitors = Math.max(...trafficData.map(d => d.visitors))

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80">
            Agência Digital
          </Link>
          <div className="flex gap-4">
            <Link href="/admin" className="hover:text-cyan-400 transition">Admin</Link>
            <button className="btn-primary text-sm">Sair</button>
          </div>
        </div>
      </nav>

      {/* Analytics Dashboard */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold gradient-text mb-12">📊 Analytics</h1>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass-effect p-6 rounded-lg"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-gray-400 text-sm font-semibold mb-2">{stat.label}</h3>
                <p className="text-3xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-green-400 text-sm font-semibold">{stat.change}</p>
              </motion.div>
            ))}
          </div>

          {/* Traffic Chart */}
          <motion.div
            className="glass-effect p-8 rounded-lg mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-bold mb-6">Tráfego da Semana</h2>
            <div className="flex items-end justify-around h-64 gap-4">
              {trafficData.map((day, index) => (
                <motion.div
                  key={day.day}
                  className="flex-1 flex flex-col items-center"
                  initial={{ height: 0 }}
                  animate={{ height: '100%' }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="relative w-full flex-1 flex items-end justify-center mb-4">
                    <motion.div
                      className="w-full bg-gradient-to-t from-blue-600 to-cyan-500 rounded-t"
                      initial={{ height: 0 }}
                      animate={{ height: `${(day.visitors / maxVisitors) * 100}%` }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    />
                  </div>
                  <span className="text-sm text-gray-400">{day.day}</span>
                  <span className="text-xs text-gray-500">{day.visitors}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Top Pages */}
          <motion.div
            className="glass-effect p-8 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Páginas Mais Visitadas</h2>
            <div className="space-y-4">
              {[
                { page: 'Homepage', views: 1234, bounce: '32%' },
                { page: '/servicos', views: 892, bounce: '28%' },
                { page: '/portfolio', views: 756, bounce: '35%' },
                { page: '/blog', views: 543, bounce: '42%' },
              ].map((item, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-gray-700 hover:border-cyan-400 transition">
                  <div>
                    <h3 className="font-semibold">{item.page}</h3>
                    <p className="text-gray-400 text-sm">{item.views} visualizações</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-cyan-400">{item.bounce}</p>
                    <p className="text-gray-400 text-sm">Taxa de rejeição</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}
