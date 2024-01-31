import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luxruy Rentals',
  description: 'Find Your Dream Property',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  

    <html lang="en">
      <body >
        
          <main className = "relative" >
        <Navbar />
        {children}
        <Footer />
          </main>
      </body>
    </html>
  

  )
}
