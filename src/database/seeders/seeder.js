require('../../config/dotenv')();
require('../../config/sequelize');

const seedModelUser = require('./UserSeeder');
const seedModelProdutos = require('./ProdutosSeeder');
const seedModelPedido = require('./PedidoSeeder');
const seedModelCarrinho = require('./CarrinhoSeeder');
const seedModelPagamento = require('./PagamentoSeeder');
const seedModelItem= require('./ItemCarrinho');

(async () => {
  try {

    await seedModelUser();
    await seedModelPedido();
    await seedModelProdutos();
    await seedModelCarrinho();
    await seedModelPagamento();
    await seedModelItem();

  } catch (err) { console.log(err) }
})();
