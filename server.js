import express from 'express'
import mongoose from 'mongoose'

import { getAllGelato, getGelato, postGelato, putGelato, deleteGelato } from './controllers/gelato.controller.js'
 



// WARNING /// DO NOT COMMIT PASSWORD TO PUBLIC REPOSITORIES
// Enviroment Variables (process.env) npm doten

mongoose.connect('mongodb://localhost:27017/gelato-shop')
// Express-Server erstellen
const server = express()
server.use(express.json())

server.get('/gelato', getAllGelato)

server.get('/gelato/:gelatoId', getGelato)

server.post('/gelato', postGelato)
server.put('/gelato/:gelatoId', putGelato)
server.delete('/gelato/:gelatoId', deleteGelato)



server.listen(4000, () => {
  console.log('Gelato-Shop Server is up and runnig')
})
