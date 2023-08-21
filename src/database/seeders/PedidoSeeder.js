const Pedidos = require("../../models/Pedido");
require("../../models/Relacionamentos");

const PedidosPredefinidos = [
  {
    dataPedido: "2023-06-12",
    status: "Enviado",
    totalDoPedido: 135.90,
  },
  {
    dataPedido: "2023-08-20",
    status: "Processando",
    totalDoPedido: 210.90,
  },
  {
    dataPedido: "2023-08-09",
    status: "Saiu para entrega",
    totalDoPedido: 309.90,
  },
];

const seedPedidos = async function () {
  try {
    await Pedidos.sync({ force: true });

    for (const pedidosData of PedidosPredefinidos) {
      await Pedidos.create(pedidosData);
    }

  } catch (err) {
    console.log(err);
  }
};

module.exports = seedPedidos;
