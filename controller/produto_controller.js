const res = require('express/lib/response');
const produtoNegocio = require('../negocio/produto_negocio');


exports.listar = (req, res) => {
    const lista = res.json(produtoNegocio.listar);
    res.json(lista);
}

/* Lista produto pelo id */
exports.buscarPorid = (id) => {
    const id = req.params.id;

    try {
        const produto = produtoNegocio.buscarPorid(id);
    } catch {
        res.status(404).json({ erro: "Produto não encontrado!" });
    }
}

exports.deletar = (id) => {
    const id = req.params.id;

    const indice = listaProdutos.find(
        (produto) => produto.id == id
    );

    if (!produto) {
        res.status(404).jcson({ erro: "Produto não encontrado!" });
    } else {
        res.json(produto);
    }

}

exports.inserir = (req, res) => {
    const produto = req.body;

    const produtoInserido = produtoNegocio.inserir(produto);
    res.status(201).json(produto);

    if (produto && produto.nome && produto.preco) {
        produto.id = idAutoIncrement++;
        listaProdutos.push(produto);
        res.status(201).json(produto);
    } else {
        res.status(400).json({ erro: "Falta parametros de produto" })
    }
}