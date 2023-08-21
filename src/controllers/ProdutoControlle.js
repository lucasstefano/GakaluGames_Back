const { Op } = require('sequelize');
const Produto = require('../models/Produto');

// Retorna todas as instâncias de um objeto no BD 

const index = async (req, res) => {
    try {
        const produtos = await Produto.findAll();
        return res.status(200).json({ produtos });
    } catch (err) {
        return res.status(500).json({ err });
    }
};


//Retorna informação de uma instância específica no BD

const show = async (req, res) => {
    const { id } = req.params;
    try {
        const produto = await Produto.findByPk(id);
        return res.status(200).json({ produto });
    } catch (err) {
        return res.status(500).json({ err });
    }
};

//Cria uma instância nova do Objeto no BD

const create = async (req, res) => {
    try {
        const newProduto = req.body;
        const produto = await Produto.create(newProduto);
        return res.status(201).json({ message: 'Produto cadastrado com sucesso!', produto });
    } catch (err) {
        res.status(500).json({ error: err });
    }
};

//Edita uma instância específica no BD

const update = async (req, res) => {
    const { id } = req.params;
    try {
        const [updated] = await Produto.update(req.body, { where: { id_produto: id } });
        if (updated) {
            const produto = await Produto.findByPk(id);
            return res.status(200).send(produto);
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json('Produto não encontrado');
    }
};

//Deleta uma instância específica no BD

const destroy = async (req, res) => {
    const { id } = req.params;
    try {
        const deleted = await Produto.destroy({ where: { id_produto: id } });
        if (deleted) {
            return res.status(200).json('Produto deletado com sucesso.');
        }
        throw new Error();
    } catch (err) {
        return res.status(500).json('Produto não encontrado.');
    }
};

module.exports = {
    update,
    destroy,
    create,
    index,
    show,
};
