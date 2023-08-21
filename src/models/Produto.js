const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Produto = sequelize.define('Produtos', {
    id_produto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preço: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    descrição: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    local: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade_estoque: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Produto;
