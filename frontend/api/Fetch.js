import { useEffect, useState } from 'react'

function GetData({itemid}){
    // const URL = "https://bagsofhopedb.azurewebsites.net/items"
    const URL = "http://localhost:4000/items"
    const [info, setInfo] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`${URL}/${itemid}`)
            const data = await res.json()
            setInfo(data)
        }
        fetchData()
    }, [])

    return info;
    
}

function PostData({inputs}){
    // const URL = "https://bagsofhopedb.azurewebsites.net/items"
    const URL = "http://localhost:4000/items"
    fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: inputs.name,
            quantity: inputs.quantity,
            date: inputs.date,
            note: inputs.note,
            expiry_date: inputs.expiry_date
        })
    }).then(() => {
        alert('Item added')
    })
    
}

function PutData({inputs}){
    fetch(`${URL}/${itemid}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            quantity: inputs.quantity,
            date: inputs.date,
            note: inputs.note,
            expiry_date: inputs.expiry_date
        })
    }).then(() => {
        alert('Item edited')
    })
}

function DeleteData({itemid}){
    fetch(`${URL}/${itemid}`, { method: 'DELETE' })
}


export default { GetData, PostData, PutData, DeleteData }

