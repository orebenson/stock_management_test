import styled from 'styled-components'

const SDiv = styled.div`
	display: flex;
	justify-content: center;

	& div {
		flex: 1;
		max-width: 1200px;
	}
`

function Container({children}) {
    return ( 
         <SDiv>
			<div>
            	{children}
			</div>
         </SDiv>
     );
}

export default Container;