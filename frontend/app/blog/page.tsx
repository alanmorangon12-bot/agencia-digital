'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

interface BlogPost {
  id: number
  titulo: string
  resumo: string
  conteudo: string
  autor: string
  data: string
  categoria: string
  imagem: string
}

export default function Blog() {
  const [posts] = useState<BlogPost[]>([
    {
      id: 1,
      titulo: 'Como Maximizar ROI com Google Ads',
      resumo: 'Dicas e estratégias para melhorar seus resultados em campanhas de Google Ads',
      conteudo: 'Conteúdo completo do artigo...',
      autor: 'João Silva',
      data: '2024-06-09',
      categoria: 'Marketing Digital',
      imagem: 'https://via.placeholder.com/600x400?text=Google+Ads'
    },
    {
      id: 2,
      titulo: 'Tendências de Design em 2024',
      resumo: 'Conheça as principais tendências de design para websites e aplicativos',
      conteudo: 'Conteúdo completo do artigo...',
      autor: 'Maria Santos',
      data: '2024-06-08',
      categoria: 'Design',
      imagem: 'https://via.placeholder.com/600x400?text=Design+Trends'
    },
    {
      id: 3,
      titulo: 'SEO: Otimização para Mecanismos de Busca',
      resumo: 'Guia completo de SEO para aumentar sua visibilidade no Google',
      conteudo: 'Conteúdo completo do artigo...',
      autor: 'Pedro Costa',
      data: '2024-06-07',
      categoria: 'SEO',
      imagem: 'https://via.placeholder.com/600x400?text=SEO+Guide'
    },
    {
      id: 4,
      titulo: 'Desenvolvimento Web com Next.js',
      resumo: 'Aprenda a criar aplicações modernas com Next.js e React',
      conteudo: 'Conteúdo completo do artigo...',
      autor: 'Ana Silva',
      data: '2024-06-06',
      categoria: 'Desenvolvimento',
      imagem: 'https://via.placeholder.com/600x400?text=Next.js'
    },
  ])

  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold gradient-text hover:opacity-80">Agência Digital</Link>
          <div className="hidden md:flex gap-8">
            <Link href="/servicos" className="hover:text-cyan-400 transition">Serviços</Link>
            <Link href="/portfolio" className="hover:text-cyan-400 transition">Portfolio</Link>
            <Link href="/blog" className="hover:text-cyan-400 transition font-semibold">Blog</Link>
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
          Blog da Agência
        </motion.h1>
        <p className="text-gray-400 text-lg">Artigos, dicas e tendências em marketing digital e desenvolvimento</p>
      </section>

      {/* Blog Posts */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              className="glass-effect rounded-lg overflow-hidden group cursor-pointer hover:border-cyan-400 transition"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedPost(post)}
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={post.imagem}
                  alt={post.titulo}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-cyan-400 text-sm font-semibold">{post.categoria}</span>
                  <span className="text-gray-500 text-sm">{new Date(post.data).toLocaleDateString('pt-BR')}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition">{post.titulo}</h3>
                <p className="text-gray-400 mb-4">{post.resumo}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Por {post.autor}</span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-2 transition">Ler Mais →</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <motion.div
          className="glass-effect p-12 rounded-lg text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Receba Novos Artigos</h2>
          <p className="text-gray-400 mb-6">Inscreva-se na nossa newsletter e fique atualizado com as últimas tendências</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="seu@email.com"
              className="flex-1 bg-white/5 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
            />
            <button className="btn-primary">Inscrever</button>
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
