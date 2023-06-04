import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
    <nav>
      <p>
          Test Header from {process.env.HEADER_URL}
      </p>
      <ul>
        <li>
          <Link href="/" className='link'>Home</Link>
          <Link href="/price" className='link'>Pricing Page</Link>
        </li>
      </ul>
      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir, Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        li :global(.link) {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
          padding-right: 10px;
        }
      `}</style>
    </nav>
  )
}
