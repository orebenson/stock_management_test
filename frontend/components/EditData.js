import { useState } from 'react'
import styled from 'styled-components'

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

function EditData(props){
    const URL = "http://localhost:4000/items";
    const itemid = props.id;

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const submitData = e => {
        console.log(inputs)
        e.preventDefault()

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

    return (
        <div>
            <SForm onSubmit={submitData}>
                <label>Quantity <input type="number" name="quantity" value={inputs.quantity} onChange={handleChange} /></label>
                <label>Date <input type="date" name="date" value={inputs.date} onChange={handleChange} /></label>
                <label>Note <input type="text" name="note" value={inputs.note} onChange={handleChange} /></label>
                <label>Expiry Date <input type="date" name="expiry_date" value={inputs.expiry_date} onChange={handleChange} /></label>

                <button type="submit">Submit</button>
            </SForm>
        </div>
    )
}


export default EditData
