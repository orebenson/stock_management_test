import styled from "styled-components";

const SFooter = styled.footer`
    padding: 2rem;
    display: flex;
    justify-content: center;
    color: white;
    background: hsl(30, 70%, 70%);
`

const SDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    gap: 1rem;

    a {
        color:hsl(30, 70%, 20%);
        text-decoration:none;
        transition: color 0.5s;

        &:hover {
            color:hsl(30, 70%, 50%);
        }
    }
`

function Footer() {
    return ( 
        <SFooter>
            <SDiv>
                {/* <a href='#'>Contact</a> */}
            </SDiv>
        </SFooter>
     );
 }
 
 export default Footer;