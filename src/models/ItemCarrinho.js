const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const ItemProduto = sequelize.define('Item do Pedido', {
    id_itemProduto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precoUnitario: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
}, {
    timestamps: false
});

module.exports = ItemProduto;
