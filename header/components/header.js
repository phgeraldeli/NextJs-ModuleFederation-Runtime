import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
    <p>
        Test Header from {process.env.HEADER_URL}
    </p>
  )
}
