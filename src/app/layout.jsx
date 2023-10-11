import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './Provider'
import Navbar from '@/components/Navbar'
import SearchBox from '@/components/SearchBox'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Harbor',
  description: 'This is Movie Harbor website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>

        {/* Header */}
        <Header />
        <Navbar/>
        {/* Navbar */}
        
        {/* Search Box */}
        <SearchBox />
        {children}
        </Provider>
        </body>
    </html>
  )
}
