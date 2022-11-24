import styled from 'styled-components'
import Link from 'next/link'

const SDiv = styled.div`
    a {
        text-decoration: none;
    }

	h1 {
		color: hsl(30, 70%, 20%);
		margin:0;
		cursor: pointer;
		display: flex;
		gap: 0.5rem;
	}
`


function Brand() {
	return (
		<SDiv>
			<Link href="/">
				<h1>Bags of Hope</h1>
			</Link>
		</SDiv>
	);
}

export default Brand;
