import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    date: Date,
    note: String,
    expiry_date: Date
})

const Item = mongoose.model('Item', itemSchema)

export { Item, itemSchema }