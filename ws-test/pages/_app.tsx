import type { AppProps } from 'next/app'
import '../styles/home.scss'
import '../styles/globals.scss'
import UsernameProvider from '../components/usernameContext'



export default function App({ Component, pageProps }: AppProps) {


  return (

    <>
      <UsernameProvider>
        <Component {...pageProps} />
      </UsernameProvider>
    </>
  )
} 
