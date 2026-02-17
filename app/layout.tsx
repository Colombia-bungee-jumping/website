import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const bebasNeue = Bebas_Neue({ weight: '400', subsets: ['latin'], variable: '--font-bebas' })

export const metadata: Metadata = {
  title: 'VertexDrop | Bungee Jumping Extremo',
  description: 'Vive la experiencia de adrenalina mas intensa con VertexDrop. Saltos de bungee jumping en las ubicaciones mas espectaculares. Reserva tu salto ahora.',
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
