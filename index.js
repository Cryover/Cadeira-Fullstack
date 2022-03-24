const express = require('express')
const app = express()
const port = 3000

let listaProdutos = [
    { id: 1, nome: "Pastel", preco: 7 }
];
let idAutoIncrement = 2;

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

/* Lista tudo da lista de produtos */
app.get('/api/produtos', (req, res) => {
    res.json(listaProdutos);
})

/* Delete produto pelo id */
app.delete('/api/produtos/:id', (req, res) => {
    const id = req.params.id;

    const indice = listaProdutos.find(
        (produto) => produto.id == id
    );

    if (!produto) {
        res.status(404).jcson({ erro: "Produto não encontrado!" });
    } else {
        res.json(produto);
    }

})

/* Lista produto pelo id */
app.get('/api/produtos/:id', (req, res) => {
    const id = req.params.id;

    const produto = listaProdutos.findIndex(
        (produto) => produto.id == id
    );

    if (indice < 0) {
        res.status(404).json({ erro: "Produto não encontrado!" });
    } else {
        const produtoDeletado = listaProdutos.splice(indice, 1);
        res.json(produtoDeletado);
    }
})

/* Insere produto da lista de produtos */
app.post("/api/produtos", (req, res) => {
    const produto = req.body;
    if (produto && produto.nome && produto.preco) {
        produto.id = idAutoIncrement++;
        listaProdutos.push(produto);
        res.status(201).json(produto);
    } else {
        res.status(400).json({ erro: "Falta parametros de produto" })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})