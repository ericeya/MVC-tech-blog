const { User } = require('../models');

const userData = [
  {
    username: "ericeya",
    email: "eric@gmail.com",
    password: "password",
    blogpost_id: [1]
  },
  {
    username: "daniellee",
    email: "daniel@gmail.com",
    password: "password",
    blogpost_id: [2]
  },
  {
    username: "joethecat",
    email: "joe@gmail.com",
    password: "password",
    blogpost_id: [3]
  },
 
  
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true
});

module.exports = seedUser;
