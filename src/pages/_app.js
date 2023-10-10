import { SessionProvider } from 'next-auth/react'
// all the components get authentication access
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
  <Component {...pageProps} />
  </SessionProvider>
  )
}
