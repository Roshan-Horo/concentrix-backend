import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import { notFound, errorHandler} from './middleware/errorMiddleware.js'
import graphRoutes from './routes/graphRoutes.js'

// config
const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())

// Connect to DB
connectDB()

// API end points

app.use('/api/data', graphRoutes)

app.get('/',(req,res) => {
    res.send(JSON.stringify({msg: "API is running"}))
})


app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT,() => console.log(`Server running ${process.env.NODE_ENV} mode on port ${PORT}`))