const { Router } = require("express");
const router = Router();



//CRUD de Usuário
const UserController = require("../controllers/UserController");
router.post("/User", UserController.create);
router.get("/User /:id", UserController.show); 
router.get("/User", UserController.index); 
router.put("/User/:id", UserController.update);
router.delete("/User/:id", UserController.destroy);


//CRUD de Produto
const ProdutoController = require("../controllers/ProdutoControlle");
router.get('/produtos', ProdutoController.index);
router.get('/produtos/:id', ProdutoController.show);
router.post('/produtos', ProdutoController.create);
router.put('/produtos/:id', ProdutoController.update);
router.delete('/produtos/:id', ProdutoController.destroy);



module.exports = router;
