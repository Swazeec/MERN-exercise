import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import { PORT, mongoDBURL } from './config.js'
import booksRoute from './routes/booksRoute.js'

const app = express()

// middleware for parsing request body
app.use(express.json())

// middleware for handling CORS POLICY
// OPTION 1: Allow All origins with default cors(*)
// app.use(cors())
// OPTION 2: allow custom origins
app.use(
    cors({
        origin:'http://localhost:5173',
        methods:['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders:['Content-Type']
    })
)


app.get('/', (req, res) => {
    return res.status(200).send('Welcome')
})

app.use('/books', booksRoute)


mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log("app connected to db")
        app.listen(PORT, ()=> {
            console.log(`App is listening to port: ${PORT}`)
        })
    })
    .catch((error)=>{
        console.log(error)
    })