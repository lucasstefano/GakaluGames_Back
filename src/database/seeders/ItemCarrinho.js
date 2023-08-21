const ItemCarrinho = require("../../models/ItemCarrinho");


const itemCarrinhoPredefinido = [
  {
    quantidade: 3,
    precoUnitario: 93.00,
  },
  {
    quantidade: 1,
    precoUnitario: 120.00,
  },
  {
    quantidade: 4,
    precoUnitario: 25.90,
  },
];

const seedItemCarrinho = async function () {
  try {
    await ItemCarrinho.sync({ force: true });

    for (const itemCarrinhoData of itemCarrinhoPredefinido) {
      await ItemCarrinho.create(itemCarrinhoData);
    }

    console.log("Dados predefinidos de itens de carrinho inseridos com sucesso!");
  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedItemCarrinho;
