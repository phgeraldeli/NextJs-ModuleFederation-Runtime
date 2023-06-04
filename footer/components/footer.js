import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Footer() {
  return (
    <p>
        Test Footer from {process.env.FOOTER_URL}
    </p>
  )
}
