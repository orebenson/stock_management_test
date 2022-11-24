import styled from "styled-components"
import Container from './Container'
import Navbar from "./Navbar"
import Brand from "./Brand"

const SHeader = styled.header`
    background: hsl(30, 70%, 70%);
`

const SDiv = styled.div`
    display:flex;
    gap:2rem;
    align-items:center;
    justify-content:space-between;
    padding:2rem;
`

export default function Header() {
    return (
        <SHeader>
            <Container>
                <SDiv>
                    <Brand />
                    <Navbar />
                </SDiv>
            </Container>
        </SHeader>
    )
}