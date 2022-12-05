import type { AppProps } from 'next/app'
import '../styles/home.scss'
import '../styles/globals.scss'



export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
