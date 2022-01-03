import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import { getAllGelato, getGelato, postGelato, putGelato, deleteGelato,
   } from './controllers/gelato.controller.js'
 

   import {
   getAllCategories, getCategories, postCategories, putCategories, deleteCategories 
  } from './controllers/categories.controller.js'


  dotenv.config()

  const dbUser = process.env.DB_USER;
  const dbPassword = process.env.DB_PASSWORD;
  const dbHost = process.env.DB_HOST;
  const dbName = process.env.DB_NAME;



// WARNING /// DO NOT COMMIT PASSWORD TO PUBLIC REPOSITORIES
// Enviroment Variables (process.env) npm doten

// mongoose.connect('mongodb://localhost:27017/gelato-shop')
const connectionString = `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority`
mongoose.connect(connectionString);

// Express-Server erstellen
const server = express()
// server.use(cors())

server.use(cors())

// JSON Body Parser
server.use(express.json())

server.get('/gelato', getAllGelato)
server.get('/categories', getAllCategories)

server.get('/gelato/:gelatoId', getGelato)
server.get('/categories/:categoriesId', getCategories)

server.post('/gelato', postGelato)
server.post('/categories', postCategories)

server.put('/gelato/:gelatoId', putGelato)
server.put('/categories/:categoriesId', putCategories)

server.delete('/gelato/:gelatoId', deleteGelato)
server.delete('/categories/:categoriesId', deleteCategories)


server.listen(4000, () => {
  console.log('Gelato-Shop Server is up and runnig')
})
