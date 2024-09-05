import { Router } from "express";
const emocoesRoutes = Router()
let emocoes = [
    
    {
        id: 1,
        nome: "Nojinho",
        cor: "Verde"
    },
    {
        id: 2,
        nome: "Raiva",
        cor: "Vermelho"
    },
    {
        id: 3,
        nome: "Tristeza",
        cor: "Azul"
    },
]

//Rota para buscar todas as emoções
emocoesRoutes.get("/", (req, res) => {
    return res.status(200).send(emocoes);
});

//Rota para criar uma nova emoção
emocoesRoutes.post("/", (req, res) => {
    const { nome, cor } = req.body;
    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    }

    emocoes.push(novaEmocao)
    return res .status(201).send(novaEmocao);
});

emocoesRoutes.get("/:id", (req, res) => {
    const { id } = req.params;
    //console.log(id)
    const emocao = emocoes.find((emotion) => emotion.id == id)

    if (!emocao) {
        return res.status(404).send({
            message: "Emoção não encontrada!",
        });
    }

    return res.status(200).send({
        message: "Emoção Encontrada",
        emocao,
    })
});

export default emocoesRoutes