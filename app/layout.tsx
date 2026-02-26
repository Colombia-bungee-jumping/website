import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { company } from '@/config/company'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })

export const metadata: Metadata = {
  title: `${company.name} - Saltos de adrenalina en Colombia`,
  description: `Vive la experiencia de adrenalina mas intensa con ${company.name}. Saltos de bungee jumping en Colombia. Reserva tu salto ahora.`,
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
