import express from "express";
import produtos from "../routes/produtosRoutes.js";

const routes = (app) => {
    app.route("/").get((req,res) => res.status(200).send("Curso"));
    app.use(express.json(), produtos);
};

export default routes;