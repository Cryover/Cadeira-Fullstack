const express = require('express');
const rota = express.Router();

const controller = require('.../controller/produto_controller');

/* Lista tudo da lista de produtos */
rota.get('/', controller.listar);

/* Delete produto pelo id */
rota.delete('/:id', controller.delete);

/* Lista produto pelo id */
rota.get('/:id', controller.buscarPorid);

/* Insere produto da lista de produtos */
rota.post("/", controller.inserir);

module.exports = rota;