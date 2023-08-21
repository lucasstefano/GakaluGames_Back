const User = require("../../models/User");
const faker = require('faker-br');
require("../../models/Relacionamentos");

const seedUser = async function () {
  try {
    await User.sync({ force: true });

    for (let i = 0; i < 10; i++) {
      await User.create({
        nome: faker.name.firstName(),
        email: faker.internet.email(),
        aniversario: faker.date.between(1990, 2004),
        telefone: faker.phone.phoneNumber(),
        cpf: faker.br.cpf(),
        rua: faker.address.streetAddress(),
        cidade: faker.address.city(),
        estado: faker.address.stateAbbr(),
        pais: 'Brazil',
        cep: faker.address.zipCode(),
      });
    }
  } catch (err) { 
    console.log(err); 
  }
};

module.exports = seedUser;
