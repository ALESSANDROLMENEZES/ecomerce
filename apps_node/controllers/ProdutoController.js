const Produto = require('./../models/ProdutoModel');

//-----------------------------------------------------------------------------------
const salvarProduto = (req, res, next) => {
  let produto = new Produto(
    req.body.descricao, req.body.id_categoria_produto, req.body.preco_venda, req.body.id_unidade_medida, req.body.info_nutricional,
    req.body.imagem, req.body.status, req.body.produto_especial, req.body.fator_multiplicador
  );
  produto.salvarProduto(produto).then(produto => {
    res.send(produto);
  }).catch(err => {
    res.send(err.message);
  });
};
//-----------------------------------------------------------------------------------
const editarProduto = (req, res, next) => {
  let produto = new Produto(
    req.body.descricao, req.body.id_categoria_produto, req.body.preco_venda, req.body.id_unidade_medida, req.body.info_nutricional,
    req.body.imagem, req.body.status, req.body.produto_especial, req.body.fator_multiplicador
  );
  produto.id = req.body.id;
  produto.atualizarProduto(produto).then(produto => {
    res.send(produto);
  }).catch(err => {
    res.send(err.message);
  });
};
//-----------------------------------------------------------------------------------
const listarProduto = (req, res, next) => {
  let produto = new Produto();
  produto.atualizarProduto(produto).then(produto => {
    res.send(produto);
  }).catch(err => {
    res.send(err.message);
  });
};
//-----------------------------------------------------------------------------------
const desativarProduto = (req, res, next) => {
  let produto = new Produto();
  produto.id = req.body.id;
  produto.atualizarProduto(produto).then(produto => {
    res.send(produto);
  }).catch(err => {
    res.send(err.message);
  });
};

module.exports = { salvarProduto, editarProduto, listarProduto, desativarProduto };