import Layout from '../constants/Layout'

import '../styles/global/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
         <Component {...pageProps} />
    </Layout>
    </>
  )
  
 
}

export default MyApp
