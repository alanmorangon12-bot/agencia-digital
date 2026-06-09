'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface User {
  id: number
  nome: string
  email: string
}

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')

    if (!token) {
      router.push('/auth/login')
      return
    }

    if (userData) {
      setUser(JSON.parse(userData))
    }
    setLoading(false)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push('/')
  }

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Carregando...</div>
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-effect">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80">
            Agência Digital
          </Link>
          <button onClick={handleLogout} className="btn-primary text-sm">
            Sair
          </button>
        </div>
      </nav>

      {/* Dashboard Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-2 gradient-text">
            Bem-vindo, {user?.nome}!
          </h1>
          <p className="text-gray-400 mb-12">Painel de controle da sua conta</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Account Card */}
            <motion.div
              className="glass-effect p-8 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl font-bold mb-4">👤 Minha Conta</h2>
              <p className="text-gray-400 mb-2">Email: {user?.email}</p>
              <Link href="/dashboard/perfil" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Editar Perfil →
              </Link>
            </motion.div>

            {/* Orders Card */}
            <motion.div
              className="glass-effect p-8 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl font-bold mb-4">📋 Meus Pedidos</h2>
              <p className="text-gray-400 mb-2">Acompanhe seus projetos</p>
              <Link href="/dashboard/pedidos" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Ver Pedidos →
              </Link>
            </motion.div>

            {/* Services Card */}
            <motion.div
              className="glass-effect p-8 rounded-lg"
              whileHover={{ y: -5 }}
            >
              <h2 className="text-2xl font-bold mb-4">🎯 Contratar Serviço</h2>
              <p className="text-gray-400 mb-2">Solicite novo orçamento</p>
              <Link href="/servicos" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                Ver Serviços →
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
