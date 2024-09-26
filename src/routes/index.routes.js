import { Router } from "express";

import emocoesRoutes from "./emocoes.routes.js";
import personagensRoutes from "./personagens.routes.js";

const routes = Router();

routes.get("/", (req,res) => {
    return res.status(200).send({message:"Hello World"})
});

routes.get("/2tds2", (req, res) => {
    return res .status(200).send({ message: "Hello World!"})
});

routes.use("/emocoes", emocoesRoutes);
routes.use("/personagens", personagensRoutes);

export default routes;