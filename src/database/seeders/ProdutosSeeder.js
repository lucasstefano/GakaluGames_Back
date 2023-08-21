const Produtos = require("../../models/Produto");
require("../../models/Relacionamentos");

const produtosPredefinidos = [
  {
    nome: "The Legend of Zelda: Breath  of the Wild (Nintendo Switch)",
    preço: 98.99,
    descrição: "The Legend of Zelda: Breath of the Wild é a mais nova aventura da franquia, trazendo desta vez um mundo aberto vasto, rico e cheio de vida como nunca antes.",
    tipo: "Jogos Eletrônicos",
    local: "Rio de Janeiro",
    quantidade_estoque: 30
  },
  {
    nome: "Cyberpunk 2077 (PlayStation 4)",
    preço: 143.99,
    descrição: "Cyberpunk 2077 transfere o jogador para um mundo futurístico obcecado por poder, glamour e biomodificações. ",
    tipo: "Jogos Eletrônicos",
    local: "São Paulo",
    quantidade_estoque: 100
  },
  {
    nome: "Anthem",
    preço: 14.99,
    descrição: "Anthem é um convite para vivenciar um RPG cooperativo de ação ambientado em um mundo novo e misterioso criado pela BioWare e pela EA. Junte-se com até três jogadores e monte armaduras potentes, sob medida, com tecnologia de ponta. Explore vastas ruínas, lute contra inimigos brutais e recupere artefatos sobrenaturais",
    tipo: "Jogos Eletrônicos",
    local: "Rio de Janeiro",
    quantidade_estoque: 300
  },
  
  {
    nome: "HEADSET GAMER MULTI WARRIOR",
    preço: 83.99,
    descrição: "O Headset Gamer da Multilaser foi desenvolvido para oferecer design, recursos táticos, acabamento e um equilíbrio excelente entre ergonomia e qualidade sonora. comunicaão Microfone retrátil e controle de áudio embutido ao cabo para melhor comunicação. ",
    tipo: "Acessórios Novos",
    local: "São Paulo",
    quantidade_estoque: 60
  },
  {
    nome: "TECLADO GAMER MULTI PRETO/VERDE",
    preço: 31.99,
    descrição: "Teclado Gamer do tipo membrana, interface USB v2.0, leiaute brasileiro (português), teclas especiais verdes.",
    tipo: "Acessórios Novos",
    local: "Bahia",
    quantidade_estoque: 14
  },
  {
    nome: "MEMORIA CORSAIR VENGEANCE LPX 4GB (1X4) DDR4 2400MHZ ",
    preço: 149.98,
    descrição: "A memória VENGEANCE LPX foi projetada para overclocking de alto desempenho. O dissipador de calor é feito de alumínio puro para dissipação de calor mais rápida e o PCB com oito camadas ajuda a controlar o calor e fornece folga para overclocking superior",
    tipo: "Peças de Computadores",
    local: "São Paulo",
    quantidade_estoque: 27
  },
  {
    nome: "PLACA DE VIDEO GIGABYTE GEFORCE GT 1030 2GB GDDR5 ",
    preço: 498.99,
    descrição: "Acelere toda a sua experiência com o PC com a placa gráfica NVIDIA GeForce GT 1030, rápida e potente. Jogos. Vídeo HD e edição de imagens. A premiada arquitetura NVIDIA Pascal da GT 1030, o potente motor gráfico e as tecnologias de ponta oferecem a atualização de desempenho de que você precisa para impulsionar os aplicativos de PC mais exigentes da atualidade.",
    tipo: "Peças de Computadores",
    local: "Minas Gerais",
    quantidade_estoque: 10
  },
  {
    nome: "FONE DE OUVIDO MULTI HEADPHONE POP PRETO PH053",
    preço: 31.98,
    descrição: " Fone De Ouvido Headphone Vibe Design Retrô P2 Preto Ph053",
    tipo: "Acessórios Semi-Novos",
    local: "Acre",
    quantidade_estoque: 2
  },
 
];

const seedProdutos = async function () {
  try {
    await Produtos.sync({ force: true });

    for (const produtosData of produtosPredefinidos) {
      await Produtos.create(produtosData);
    }

  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedProdutos;
