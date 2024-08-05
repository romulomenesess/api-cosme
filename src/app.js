import express from "express";
import routes from "./routes/index.js";
import conectaDatabase from "./config/dbConect.js";

const conexao = await conectaDatabase();

conexao.on("error", (erro) => {
    console.log("Erro de conexão", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o MongoDB feita com sucesso.");
});

const app = express();
routes(app);

export default app;