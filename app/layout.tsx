import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MainLayout from '@/components/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KWW Electricals - BLDC Ceiling Fans',
  description: 'Superior air delivery, silent operation, and up to 65% energy savings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainLayout>
        {children}
       </MainLayout>
        </body>
    </html>
  )
}
