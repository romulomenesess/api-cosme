import produto from "../Models/Produtos.js";

class ProdutoController {

    static async listarProdutos (req, res) {
        try {
            const listaProdutos = await produto.find({})
            res.status(200).json(listaProdutos);
        } 
        catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na requisição`});
        }
    };

    static async listarProdutosPorId (req, res) {
        try {
            const id = req.params.id;
            const produtoEncontrado = await produto.findById(id);
            res.status(200).json(produtoEncontrado);
        } 
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição do produto`});
        }
    };

    static async cadastrarProduto(req, res) {
        try {
            const novoProduto = await produto.create(req.body);
            res.status(201).json({ message: "criado com sucesso", produto: novoProduto});
        } 
        catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar produto`});
        }
    }

    static async atualizarProdutos(req, res) {
        try {
            const id= req.params.id;
            await produto.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "produto atualizado com sucesso."});
        } 
        catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na atualização do produto`});
        }
    };

    static async excluirProdutos(req, res) {
        try {
            const id= req.params.id;
            await produto.findByIdAndRemove(id);
            res.status(200).json({message: "produto excluído com sucesso."});
        } 
        catch (erro){
            res.status(500).json({ message: `${erro.message} - falha na exclusão do produto`});
        }
    };
};
export default ProdutoController;