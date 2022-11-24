import styled from 'styled-components'
import Container from './Container'

const SMain = styled.main`
    background: hsl(30, 70%, 96%);

    & h2 {
        font-size: 2rem;
    }
`

const SDiv = styled.div`
    padding: 2rem;
`

function Main({ children }) {
    return ( 
        <SMain>
            <Container>
                <SDiv>
                    { children }
                </SDiv>
            </Container>
        </SMain>
     );
}

export default Main;