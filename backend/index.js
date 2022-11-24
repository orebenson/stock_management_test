import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { Item, itemSchema } from './models/schemas.js'
import { Db } from 'mongodb'

const app = express()
app.use(cors())
app.use(express.json())

const DB_URL = 'mongodb+srv://admin:admin@cluster0.hnblpwz.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB_URL)
const db = mongoose.connection
db.on('connected', () => {
    console.log('Database connected')
})

app.get('/items', async (req, res) => {
    const data = await Item.find()
    // const output = data.map(({ _id, name, quantity, date, note, expiry_date }) => ({ _id, name, quantity, date, note, expiry_date }))
    res.json(data)
})

app.get('/items', async (req, res) => {
    console.log(req.query)
    const { name, quantityMin, quantityMax } = req.query
    let filter = {}
    if (name) {
        filter.name = {$regex:name}
    }

    if(quantityMin || quantityMax){
        filter.quantity = {}
    }

    if (quantityMin) {
        filter.quantity.$gte = parseInt(quantityMin)
    }

    if (quantityMax) {
        filter.quantity.$lte = parseInt(quantityMax)
    }

    const data = await Item.find(filter)
    const output = data.map(({ _id, name, quantity, date, note, expiry_date }) => ({ _id, name, quantity, date, note, expiry_date }))
    res.json(output)
})

app.get('/items/:itemid', async (req, res) => {
    console.log(req.params)
    const { itemid } = req.params
    const data = await Item.findById(itemid)

    res.json(data)
})

app.post('/items', (req, res) => {
    console.log(req.body)
    const { name, quantity, date, note, expiry_date } = req.body
    const item = new Item({
        name: name,
        quantity: quantity,
        date: date,
        note: note,
        expiry_date: expiry_date
    })
    item.save()
    return res.status(201).send('Success')
})

app.listen(4000, () => {
    console.log(`Server running at http://localhost:4000`)
})