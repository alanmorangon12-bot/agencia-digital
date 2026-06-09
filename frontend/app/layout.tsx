import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agência Digital - Serviços de Marketing e Desenvolvimento',
  description: 'Tráfego pago, criação de sites, logos e apps profissionais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-dark text-light">{children}</body>
    </html>
  )
}
