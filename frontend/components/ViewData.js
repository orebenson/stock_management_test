import { useEffect, useState } from 'react'
import styled from 'styled-components'

const STable = styled.table`
    width: 100%;
    border: 0.1rem solid black;
    border-collapse: collapse;
    & td, th {
        border: 0.05rem solid black;
        padding: 0.25rem;
    }
`

function ViewData() {
    const [info, setInfo] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("http://localhost:4000/items/")
            const data = await res.json()
            setInfo(data)
        }
        fetchData()
    }, [])

    return (
        <STable>
            <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Expiry</th>
                <th>Note</th>
            </tr>
            {info.map(item => 
                <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>{new Date(item.expiry_date).toLocaleDateString("en-GB")}</td>
                    <td>{item.note}</td>
                </tr>
            )}
        </STable>
    );
}

export default ViewData;