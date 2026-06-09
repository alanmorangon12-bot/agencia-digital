'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="glass-effect sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold gradient-text">Agência Digital</h1>
          <div className="hidden md:flex gap-8">
            <Link href="#servicos" className="hover:text-cyan-400 transition">Serviços</Link>
            <Link href="#portfolio" className="hover:text-cyan-400 transition">Portfolio</Link>
            <Link href="#contato" className="hover:text-cyan-400 transition">Contato</Link>
          </div>
          <button className="btn-primary text-sm">Solicitar Orçamento</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 blur-3xl"></div>
        
        <motion.div 
          className="text-center max-w-4xl relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text">
            Impulsione seu Negócio Digital
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Tráfego pago, criação de sites, logos, design personalizado e desenvolvimento de aplicativos. 
            Soluções completas para transformar sua presença online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">Começar Agora</button>
            <button className="btn-secondary">Conhecer Serviços</button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 px-6 max-w-7xl mx-auto">
        <motion.h2 
          className="text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Nossos Serviços
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Tráfego Pago',
              description: 'Campanhas em Google Ads, Facebook e Instagram com ROI garantido',
              icon: '📊'
            },
            {
              title: 'Criação de Sites',
              description: 'Websites modernos, responsivos e otimizados para conversão',
              icon: '🌐'
            },
            {
              title: 'Design Gráfico',
              description: 'Imagens personalizadas, banners e materiais visuais profissionais',
              icon: '🎨'
            },
            {
              title: 'Criação de Logos',
              description: 'Identidade visual única e memorável para sua marca',
              icon: '✨'
            },
            {
              title: 'Promoção de Sites',
              description: 'SEO, SEM e estratégias de marketing para aumentar visibilidade',
              icon: '🚀'
            },
            {
              title: 'Desenvolvimento de Apps',
              description: 'Aplicativos mobile e web com tecnologia de ponta',
              icon: '📱'
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="glass-effect p-8 rounded-lg hover:border-cyan-400 transition cursor-pointer"
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-20 px-6 max-w-4xl mx-auto text-center">
        <motion.div
          className="glass-effect p-12 rounded-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">Pronto para crescer?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Entre em contato conosco e receba um orçamento personalizado para seu projeto.
          </p>
          <button className="btn-primary">Solicitar Orçamento</button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 px-6 text-center text-gray-500">
        <p>&copy; 2024 Agência Digital. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
