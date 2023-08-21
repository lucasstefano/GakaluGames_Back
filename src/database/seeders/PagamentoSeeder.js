const Pagamento = require("../../models/Pagamento");
require("../../models/Relacionamentos");

const pagamentoPredefinidos = [
  {
    dataPagamento: "2023-08-09",
    metodoPagamento: "Débito",
    valor:"89.90",  
  },
  {
    dataPagamento: "2023-06-20",
    metodoPagamento: "Credito",
    valor:"109.90",  
  },
  {
    dataPagamento: "2023-08-20",
    metodoPagamento: "Débito",
    valor:"235.98",
  },

];


const seedPagamento = async function () {
  try {
    await Pagamento.sync({ force: true });

    for (const pagamentoData of pagamentoPredefinidos) {
      await Pagamento.create(pagamentoData);
    }

  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedPagamento;
