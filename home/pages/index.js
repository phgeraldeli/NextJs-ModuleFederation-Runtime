import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import {Suspense,lazy} from "react";
import dynamic from 'next/dynamic';

const RemoteHeader = dynamic(() => import('header/header'), {suspense: true});
const RemoteFooter = dynamic(() => import('footer/footer'), {suspense: true});

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`${styles.main} ${inter.className}`}>
        <Suspense fallback={'loading'}>
          <RemoteHeader/>
        </Suspense>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.js</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
        <Suspense fallback={'loading'}>
          <RemoteFooter/>
        </Suspense>
      </main>
    </>
  )
}
