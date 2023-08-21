const DataTypes = require("sequelize");
const sequelize = require("../config/sequelize");


const Pedido = sequelize.define('Pedido', {
    id_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dataPedido: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalDoPedido: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    
}, {
    timestamps: false
});



module.exports = Pedido;