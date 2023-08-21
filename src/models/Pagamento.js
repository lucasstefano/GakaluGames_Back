const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");

const Pagamento = sequelize.define('Pagamento', {
    id_pagamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dataPagamento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    metodoPagamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    
}, {
    timestamps: false
});

module.exports = Pagamento;