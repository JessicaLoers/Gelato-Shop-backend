import mongoose from 'mongoose'

// Schema nach dem sich unser Model richten soll

const gelatoSchema = new mongoose.Schema({
    name: String,
    type: String,
    vegan: Boolean,
    // name: String,
    // type: String,
    // vegan: Boolean,
    // calories: Number,
    // specials: String,
})
// Modelle werden groß geschrieben, ist Konvension
// Modelle macht CRUD und ist viel mehr als das Schema (das quasi nur die Schablone ist)
const Gelato = mongoose.model('Gelato', gelatoSchema)


export default Gelato
