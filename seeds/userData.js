const { User } = require('../models');

const userData = [
  {
    username: "ericeya",
    email: "eric@gmail.com",
    password: "password"
  },
  {
    username: "daniellee",
    email: "daniel@gmail.com",
    password: "password"
  },
  {
    username: "hello",
    email: "world@gmail.com",
    password: "password"
  },
 
  
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUser;
