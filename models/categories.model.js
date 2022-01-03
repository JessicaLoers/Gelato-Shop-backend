import mongoose from 'mongoose'

const categoriesSchema = new mongoose.Schema({
  categories_name: String, 
})

const Categories = mongoose.model('Categories', categoriesSchema)

export default Categories
