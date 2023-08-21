const User = require('./User');
const Pedido = require('./Pedido');
const Produto = require('./Produto');
const Pagamento = require('./Pagamento');
const ItemCarrinho = require('./ItemCarrinho'); 
const Carrinho = require('./Carrinho');

// Relacionamento entre Usuário e Carrinho
User.hasMany(Carrinho, { foreignKey: 'ID_user' });
Carrinho.belongsTo(User, { foreignKey: 'ID_user' });

// Relacionamento entre Carrinho e Item do Carrinho
Carrinho.hasMany(ItemCarrinho, { foreignKey: 'ID_Carrinho' }); 
ItemCarrinho.belongsTo(Carrinho, { foreignKey: 'ID_Carrinho' }); 

// Relacionamento entre Produto e Item do Carrinho
Produto.hasMany(ItemCarrinho, { foreignKey: 'ID_Produto' }); 
ItemCarrinho.belongsTo(Produto, { foreignKey: 'ID_Produto' }); 

// Relacionamento entre Carrinho e o Pedido
Carrinho.hasMany(Pedido, { foreignKey: 'ID_Carrinho' });
Pedido.belongsTo(Carrinho, { foreignKey: 'ID_Carrinho' });

// Relacionamento entre Pedido e Pagamento
Pedido.hasMany(Pagamento, { foreignKey: 'ID_Pedido' });
Pagamento.belongsTo(Pedido, { foreignKey: 'ID_Pedido' });
