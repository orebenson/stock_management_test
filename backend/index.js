import express from 'express'
import cors from 'cors'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'
import { Item, itemSchema } from './models/schemas.js'
import { Db } from 'mongodb'

const app = express()
app.use(cors())
app.use(express.json())

const DB_URL = '***********************'

mongoose.connect(DB_URL)
const db = mongoose.connection
db.on('connected', () => {
    console.log('Database connected')
})

app.get('/items', async (req, res) => {
    console.log("app.get('/items')")
    console.log(req.query)
    const { name, quantityMin, quantityMax } = req.query
    let filter = {}
    if (name) {
        filter.name = { $regex: name }
    }

    if (quantityMin || quantityMax) {
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
    console.log("app.get('/items/:itemid')")
    console.log(req.params)
    const { itemid } = req.params
    const data = await Item.findById(itemid)

    res.json(data)
})

app.post('/items', (req, res) => {
    console.log("app.post('/)")
    console.log(req.body)
    const { name, quantity, date, note, expiry_date } = req.body
    const item = new Item({
        name: name,
        quantity: quantity,
        // date: new Date(),
        date: date,
        note: note,
        expiry_date: expiry_date
    })
    item.save()
    return res.status(201).send({_id: item._id})
})

app.put('/items/:itemid', async (req, res) => {
    console.log("app.put('/items/:itemid')")
    const { itemid } = req.params
    const { name, quantity, date, note, expiry_date } = req.body
    const updates = {}
    if (name) updates.name = name
    if (quantity) updates.quantity = quantity
    if (date) updates.date = date
    if (note) updates.note = note
    if (expiry_date) updates.expiry_date = expiry_date
    await Item.updateOne({"_id": itemid}, {$set: updates})
    return res.status(200).send('Success')
})

app.delete('/items/:itemid', async (req, res) => {
    console.log("app.delete('/items/:itemid')")
    const { itemid } = req.params;
    await Item.deleteOne({ _id: itemid })
    return res.status(201).send('Success')
})

app.listen(process.env.PORT || 4000, () => {
    console.log(`Server running at http://localhost:4000`)
})
