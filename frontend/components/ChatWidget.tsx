'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface ChatMessage {
  id: number
  sender: 'user' | 'agent'
  message: string
  timestamp: Date
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'agent',
      message: 'Olá! Como posso ajudar?',
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState('')

  const handleSendMessage = () => {
    if (!input.trim()) return

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      sender: 'user',
      message: input,
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setInput('')

    // Simulate agent response
    setTimeout(() => {
      const agentMessage: ChatMessage = {
        id: messages.length + 2,
        sender: 'agent',
        message: 'Obrigado por sua mensagem! Estou aqui para ajudar. Como posso servir você?',
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, agentMessage])
    }, 1000)
  }

  return (
    <>
      {/* Chat Widget */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen && (
          <motion.div
            className="absolute bottom-16 right-0 w-96 h-96 glass-effect rounded-lg shadow-2xl flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="font-bold">💬 Suporte Online</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-100'
                    }`}
                  >
                    {msg.message}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Digite uma mensagem..."
                className="flex-1 bg-white/5 border border-gray-600 rounded px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition text-sm"
              />
              <button
                onClick={handleSendMessage}
                className="btn-primary text-sm px-4"
              >
                →
              </button>
            </div>
          </motion.div>
        )}

        {/* Chat Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg flex items-center justify-center text-2xl hover:shadow-xl transition"
        >
          💬
        </motion.button>
      </motion.div>
    </>
  )
}
