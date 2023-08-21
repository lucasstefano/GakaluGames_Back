const Carrinho = require("../../models/Carrinho");
require("../../models/Relacionamentos");

const carrinhoPredefinido = [
  {
    dataDeCriacao: "2023-08-20",
    status: "Aberto",
    subTotal: 450.90,
    total: 450.90,
  },
  {
    dataDeCriacao: "2023-07-09",
    status: "Fechado",
    subTotal: 230.00,
    total: 450.90,
  },
  {
    dataDeCriacao: "2023-06-05",
    status: "Fechado",
    subTotal: 124.90,
    frete: "30%",
    total: 86.80,
  },
];

const seedCarrinho = async function () {
  try {
    await Carrinho.sync({ force: true });

    for (const carrinhoData of carrinhoPredefinido) {
      await Carrinho.create(carrinhoData);
    }

  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedCarrinho;
