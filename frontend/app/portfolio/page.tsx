'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Project {
  id: number
  titulo: string
  descricao: string
  imagem_url: string
  categoria: string
  link: string
}

export default function Portfolio() {
  const [projetos, setProjetos] = useState<Project[]>([
    {
      id: 1,
      titulo: 'Ecommerce Fashion',
      descricao: 'Plataforma de vendas online para loja de roupas',
      imagem_url: 'https://via.placeholder.com/400x300?text=Fashion+Store',
      categoria: 'Web Design',
      link: 'https://example.com'
    },
    {
      id: 2,
      titulo: 'App de Delivery',
      descricao: 'Aplicativo mobile para pedidos de comida',
      imagem_url: 'https://via.placeholder.com/400x300?text=Delivery+App',
      categoria: 'Mobile App',
      link: 'https://example.com'
    },
    {
      id: 3,
      titulo: 'Campanha Google Ads',
      descricao: 'Campanha de tráfego pago com ROI de 300%',
      imagem_url: 'https://via.placeholder.com/400x300?text=Google+Ads',
      categoria: 'Marketing Digital',
      link: 'https://example.com'
    },
    {
      id: 4,
      titulo: 'Logo Design Agency',
      descricao: 'Identidade visual completa para agência criativa',
      imagem_url: 'https://via.placeholder.com/400x300?text=Logo+Design',
      categoria: 'Design',
      link: 'https://example.com'
    },
    {
      id: 5,
      titulo: 'SaaS Platform',
      descricao: 'Plataforma de gestão empresarial em nuvem',
      imagem_url: 'https://via.placeholder.com/400x300?text=SaaS',
      categoria: 'Web Development',
      link: 'https://example.com'
    },
    {
      id: 6,
      titulo: 'Campaign Design',
      descricao: 'Campanha de redes sociais com design criativo',
      imagem_url: 'https://via.placeholder.com/400x300?text=Social+Media',
      categoria: 'Social Media',
      link: 'https://example.com'
    },
  ])

  const [filtro, setFiltro] = useState('Todos')
  const categorias = ['Todos', ...new Set(projetos.map(p => p.categoria))]
  const projetosFiltrados = filtro === 'Todos' ? projetos : projetos.filter(p => p.categoria === filtro)

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80">Agência Digital</Link>
          <div className="hidden md:flex gap-8">
            <Link href="/servicos" className="hover:text-cyan-400 transition">Serviços</Link>
            <Link href="/portfolio" className="hover:text-cyan-400 transition font-semibold">Portfolio</Link>
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
          Nosso Portfolio
        </motion.h1>
        <p className="text-gray-400 text-lg">Projetos que transformaram negócios</p>
      </section>

      {/* Filters */}
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap gap-4 justify-center">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setFiltro(cat)}
              className={`px-6 py-2 rounded-lg transition ${
                filtro === cat
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white'
                  : 'glass-effect hover:border-cyan-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetosFiltrados.map((projeto, index) => (
            <motion.div
              key={projeto.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden rounded-lg h-64 glass-effect">
                <img
                  src={projeto.imagem_url}
                  alt={projeto.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6 duration-500">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{projeto.titulo}</h3>
                    <p className="text-gray-300 text-sm mb-4">{projeto.descricao}</p>
                    <a
                      href={projeto.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block btn-primary text-sm"
                    >
                      Ver Projeto
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <span className="text-cyan-400 text-sm font-semibold">{projeto.categoria}</span>
                <h3 className="text-lg font-bold mt-2">{projeto.titulo}</h3>
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
