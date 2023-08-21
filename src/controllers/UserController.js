const {Op} = require('sequelize');
const User = require('../models/User');
const Auth = require('../config/Auth');

// Retorna todas as instâncias de um objeto no BD 
const index = async(req, res) =>{
    try{
        const user = await User.findAll();
        return res.status(200).json({user});
    } catch(err){
        return res.status(500).json({err});
    }
};

//Retorna informação de uma instância específica no BD

const show = async(req,res) => {
    const {id} = req.params;
    try {
        const user = await User.findByPk(id);
        return res.status(200).json({user});
    }catch(err){
        return res.status(500).json({err});
    }
};

//Cria uma instância nova do Objeto no BD

const create = async(req,res) => {
    try{
          const { password } = req.body;
          const HashSalt = Auth.generatePassword(password);
          const salt = HashSalt.salt;
          const hash = HashSalt.hash;
          const newUser = {
            name: req.body.name,
            email: req.body.email,
            birthday: req.body.aniversario,
            phone: req.body.telefone,
            cpf: req.body.cpf,
            hash: hash,
            salt: salt,
            rua: req.body.rua,
            cidade: req.body.cidade,
            estado: req.body.estado,
            pais: req.body.pais,
            cep: req.body.cep,
            hash: hash,
            salt: salt
          };
          const user = await User.create(newUser);
          return res.status(201).json({message: "Usuário cadastrado com sucesso!", user: user});
          
      } catch (err) {
          res.status(500).json({error: err});
      }
};

//Edita uma instância específica no BD

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await User.update(req.body, {where: {id: id}});
        if(updated) {
            const user = await User.findByPk(id);
            return res.status(200).send(user);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Usuário não encontrado");
    }
};

//Deleta uma instância específica no BD

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await User.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Usuário não encontrado.");
    }
};

module.exports = {
    update,
    destroy,
    create,
    index,
    show,
}
