const { User } = require('../models');

const userData = [
  {
    username: "ericeya",
    email: "eric@gmail.com",
    password: "password",
    blogpostId: [1]
  },
  {
    username: "daniellee",
    email: "daniel@gmail.com",
    password: "password",
    blogpostId: [2]
  },
  {
    username: "hello",
    email: "world@gmail.com",
    password: "password",
    blogpostId: [3]
  },
 
  
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUser;
