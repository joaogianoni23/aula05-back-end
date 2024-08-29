import { config } from 'dotenv'
import express from 'express'

config()

const  serverPort = process.env.PORT || 4000

const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    return res .status(200).send({ message: "Hello, World!"})
})
app.get("/2tds2", (req, res) => {
    return res .status(200).send({ message: "Hello, World!"})
})

app.listen(serverPort, () => {
    console.log(`🤑 Server started on http://localhost:${serverPort}`)
})