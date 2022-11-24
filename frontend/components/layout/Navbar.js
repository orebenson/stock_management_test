import styled from "styled-components";
import Link from "next/link"

const SNav = styled.nav`
    display: flex;
    gap: 2rem;

    a {
        font-weight: bold;
        color:hsl(30, 70%, 20%);
        text-decoration:none;
        transition: color 0.5s;
        font-size: 1.25rem;
        
        &:hover {
            color:hsl(30, 70%, 50%);
        }
    }
`

function Navbar() {
    return ( 
        <SNav>
            <Link href="/stockEntry">Stock Entry</Link>
            <Link href="/stockReplenish">Stock Replenishment</Link>
            <Link href="/reports">Reports</Link>
        </SNav>

     );
}

export default Navbar;