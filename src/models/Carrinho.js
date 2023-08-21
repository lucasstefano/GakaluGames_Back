const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Carrinho= sequelize.define('Carrinho de Compras', {
    id_Carrinho: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dataDeCriacao: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subTotal: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    frete: {
        type: DataTypes.STRING,
        allowNull: false
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    
}, {
    timestamps: false
});

module.exports = Carrinho;