
import styled from 'styled-components'
import { useState } from 'react'
import {POST} from '../api/Fetch.js'

const SForm = styled.form`
    form-box{
        min-width: 100%;
        height: 100vh;
        margin: 0vw;
        padding: 1vw ;
        position: relative; 
        margin: 0 0 .5vh 0;
    }

    label {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        text-align: right;
        width: 400px;
        line-height: 26px;
        margin-bottom: 10px;
    }

    input {
        height: 20px;
        flex: 0 0 200px;
        margin-left: 10px;
    }


`

function AddData() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitData = e => {
        e.preventDefault()
        // POST(inputs);
        
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

    return (
        <SForm onSubmit={submitData}>
            <label>Name <input type="text" name="name" value={inputs.name} onChange={handleChange} /></label>
            <label>Quantity <input type="number" min="0" name="quantity" value={inputs.quantity} onChange={handleChange} /></label>
            <label>Date <input type="date" name="date" value={inputs.date} onChange={handleChange} /></label>
            <label>Note <input type="text" name="note" value={inputs.note} onChange={handleChange} /></label>
            <label>Expiry Date <input type="date" name="expiry_date" value={inputs.expiry_date} onChange={handleChange} /></label>

            <button type="submit">Submit</button>
        </SForm>
    );
}

export default AddData;