import mongoose from 'mongoose'

const gelatoSchema = new mongoose.Schema({
  name: String,
  type: String,
  vegan: Boolean,
  calories: Number,
})

const Gelato = mongoose.model('Gelato', gelatoSchema)

export default Gelato
