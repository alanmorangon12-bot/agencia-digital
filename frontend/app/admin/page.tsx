'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'servicos' | 'projetos' | 'pedidos' | 'mensagens'>('pedidos')
  const [isAdmin] = useState(true) // Mock check

  const tabs = [
    { id: 'pedidos', label: '📋 Pedidos', count: 12 },
    { id: 'mensagens', label: '💬 Mensagens', count: 8 },
    { id: 'projetos', label: '🎨 Projetos', count: 24 },
    { id: 'servicos', label: '🛠️ Serviços', count: 6 },
  ]

  const mockPedidos = [
    { id: 1, cliente: 'João Silva', servico: 'Criação de Site', status: 'em andamento', data: '2024-06-09' },
    { id: 2, cliente: 'Maria Santos', servico: 'Design Gráfico', status: 'pendente', data: '2024-06-08' },
    { id: 3, cliente: 'Pedro Costa', servico: 'Tráfego Pago', status: 'concluído', data: '2024-06-07' },
  ]

  const mockMensagens = [
    { id: 1, nome: 'Ana Silva', email: 'ana@email.com', assunto: 'Consultoria', mensagem: 'Gostaria de contratar...', lida: false },
    { id: 2, nome: 'Carlos Lima', email: 'carlos@email.com', assunto: 'Dúvida', mensagem: 'Qual o prazo para...', lida: true },
  ]

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center">
        <div>
          <h1 className="text-3xl font-bold text-red-400 mb-4">Acesso Negado</h1>
          <p className="text-gray-400 mb-6">Você não tem permissão para acessar esta área</p>
          <Link href="/" className="btn-primary">Voltar para Home</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80">Agência Digital</Link>
          <div className="flex gap-4">
            <Link href="/dashboard" className="hover:text-cyan-400 transition">Dashboard</Link>
            <button className="btn-primary text-sm">Sair</button>
          </div>
        </div>
      </nav>

      {/* Admin Panel */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold gradient-text mb-12">📊 Painel Administrativo</h1>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {tabs.map((tab) => (
              <motion.div
                key={tab.id}
                className="glass-effect p-6 rounded-lg text-center cursor-pointer hover:border-cyan-400 transition"
                whileHover={{ y: -5 }}
                onClick={() => setActiveTab(tab.id as any)}
              >
                <h3 className="text-2xl mb-2">{tab.label.split(' ')[0]}</h3>
                <p className="text-3xl font-bold text-cyan-400">{tab.count}</p>
                <p className="text-gray-400 text-sm mt-2">{tab.label.split(' ').slice(1).join(' ')}</p>
              </motion.div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex gap-4 mb-8 flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-6 py-2 rounded-lg transition ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                    : 'glass-effect hover:border-cyan-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          {activeTab === 'pedidos' && (
            <motion.div
              className="glass-effect p-8 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-2xl font-bold mb-6">Gerenciar Pedidos</h2>
              <div className="space-y-4">
                {mockPedidos.map((pedido) => (
                  <div key={pedido.id} className="flex justify-between items-center p-4 bg-white/5 rounded-lg border border-gray-700 hover:border-cyan-400 transition">
                    <div>
                      <h3 className="font-semibold">{pedido.cliente}</h3>
                      <p className="text-gray-400 text-sm">{pedido.servico}</p>
                    </div>
                    <div className="text-right">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-2 ${
                        pedido.status === 'concluído' ? 'bg-green-500/20 text-green-400' :
                        pedido.status === 'em andamento' ? 'bg-blue-500/20 text-blue-400' :
                        'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {pedido.status.charAt(0).toUpperCase() + pedido.status.slice(1)}
                      </span>
                      <p className="text-gray-500 text-xs">{pedido.data}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'mensagens' && (
            <motion.div
              className="glass-effect p-8 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <h2 className="text-2xl font-bold mb-6">Mensagens de Contato</h2>
              <div className="space-y-4">
                {mockMensagens.map((msg) => (
                  <div key={msg.id} className={`p-4 rounded-lg border ${
                    msg.lida ? 'bg-white/5 border-gray-700' : 'bg-cyan-500/10 border-cyan-500/50'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold">{msg.nome}</h3>
                        <p className="text-gray-400 text-sm">{msg.email}</p>
                      </div>
                      {!msg.lida && <span className="bg-cyan-400 text-dark px-3 py-1 rounded-full text-xs font-semibold">Novo</span>}
                    </div>
                    <p className="text-gray-300 text-sm">{msg.mensagem}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </section>
    </main>
  )
}
