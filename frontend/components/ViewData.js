import { useEffect, useState } from 'react'
import styled from 'styled-components'
import EditData from './EditData'

const STable = styled.table`
    width: 100%;
    border: 0.1rem solid black;
    border-collapse: collapse;
    & td, th {
        border: 0.05rem solid black;
        padding: 0.25rem;
    }
`

const SForm = styled.form`
    width: 100%;
    border: 0.1rem solid black;
    overflow: hidden;
    & input {
        width: 100%;
        height: 100%;
        border: hidden;
    }
`

const SDiv = styled.div`
    display: none;
`

function ViewData() {
    // const URL = "https://bagsofhopedb.azurewebsites.net/items"
    const URL = "http://localhost:4000/items"
    const [info, setInfo] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(URL)
            const data = await res.json()
            setInfo(data)
        }
        fetchData()
    }, [])

    const [search, setSearch] = useState("")

    const handleChange = e => {
        setSearch(e.target.value)
    }

    const deleteItem = (itemid) => {
        fetch(`${URL}/${itemid}`, { method: 'DELETE' })
        setInfo((info) => info.filter(item => item._id != itemid))
        alert("Item deleted")
    }

    const [editItemId, setEditItemId] = useState()
    const [itemName, setItemName] = useState()

    const openEditForm = (itemid, itemName) => {
        setEditItemId(itemid);
        setItemName(itemName);
        console.log(editItemId)
        var edit = document.getElementById("editItem");
        edit.style.display = "block";
    }

    const closeEditForm = () => {
        var edit = document.getElementById("editItem");
        edit.style.display = "none";
    } 

    return (
        <div>
            <SForm>
                <input
                    type="text"
                    id="search"
                    placeholder="Search"
                    value={search}
                    onChange={handleChange}
                />
            </SForm>

            <br />

            <STable>
                <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Expiry</th>
                    <th>Note</th>
                    <th>Action</th>
                </tr>
                {info.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).map(item =>
                    <tr key={item._id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>{new Date(item.expiry_date).toLocaleDateString("en-GB")}</td>
                        <td>{item.note}</td>
                        <td>
                            <button onClick={() => deleteItem(item._id)}>Delete</button>
                            <button onClick={() => openEditForm(item._id, item.name)}>Edit</button>
                        </td>
                    </tr>
                )}
            </STable>
                
            <br/>

            <SDiv id="editItem"> 
                <h1>Edit Item "{itemName}"</h1>
                <EditData id={editItemId}/>
                <button onClick={() => closeEditForm()}>Close</button>
            </SDiv>

        </div>
    );
}

export default ViewData;