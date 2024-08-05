import express from "express"
import ProdutoController from "../controllers/produtoController.js"

const routes = express.Router();

routes.get("/produtos", ProdutoController.listarProdutos);
routes.get("/produtos/:id", ProdutoController.listarProdutosPorId);
routes.post("/produtos", ProdutoController.cadastrarProduto);
routes.put("/produtos/:id", ProdutoController.atualizarProdutos);
routes.delete("/produtos/:id", ProdutoController.excluirProdutos);

export default routes;