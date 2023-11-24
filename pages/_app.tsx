import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ["200", "300", "400", "500", "800"], subsets: ['latin'] })

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  )
}
