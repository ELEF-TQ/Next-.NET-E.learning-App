import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E_Learning',
  description: 'Next & .NET Quiz App',
}
 const classes = { Footer:"Footer", Header:"Header"}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <Header classes={classes.Header} />
      <body className={inter.className}>{children}</body>
      <Footer classes={classes.Footer} />
    </html>
  )
}
