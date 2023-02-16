const { User } = require('../models');

const userdata = [
  {
   username: 'Xandromus',
   email: 'xhaustromus@gmail.com',
   password: '123456789'
  },
  {
    username: 'Lernantino',
    email: 'letsgood@gmail.com',
    password: '987654321'
   },
];

const seedUserdata = () => User.bulkCreate(userdata);

module.exports = seedUserdata;