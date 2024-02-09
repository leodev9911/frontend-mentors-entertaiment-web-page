import NavBar from '../components/Shared/Navbar'
import './globals.css'
import { outfit } from './ui/fonts'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      <body className={`${outfit.className} bg-pageBlack lg:flex h-full antialiased`}>
        <main className='w-full bg-pageBlack p-6 lg:p-8 lg:flex '>
          {children}
        </main>
      </body>
    </html>
  )
}
