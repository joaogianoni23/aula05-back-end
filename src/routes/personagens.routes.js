import { Router } from "express";

const personagensRouter = Router()
const personagens = [
    {
        id: 100,
        nome: "Batman",
        studio: "DC comics",
        vivo: true
    },
    {
        id: 101,
        nome: "Deadpool",
        studio: "Disney",
        vivo: true
    },
    {
        id: 102,
        nome: "Kevin Garvey",
        studio: "HBO",
        vivo: true
    },
]


app.get("/personagens", (req, res) => {
    return res .status(200)
    .send( personagens )
})
