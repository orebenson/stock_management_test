import '../styles/globals.css'
import styled from 'styled-components'
import Footer from '../components/layout/Footer'
import Header from '../components/layout/Header'
import Main from '../components/layout/Main'

const SContainer = styled.div`
  display:grid;
  grid-template-rows:auto 1fr auto;
  min-height:100vh;
`

function MyApp({ Component, pageProps }) {
  return (
    <SContainer>
      <Header/>
      <Main>
        <Component {...pageProps} />
      </Main>
      <Footer/>
    </SContainer>
  )
}

export default MyApp
