import express from 'express'
import filmeRouter from './routes/filmeRoutes.js'
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors({
    origin: "https://grupo-de-estudos-sprint2-api-de-ava.vercel.app/"
}))
app.use("/", filmeRouter)

export default app