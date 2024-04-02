const { Blogpost } = require('../models');

const blogpostData = [
  {
    title: 'Why is MVC so important?',
    content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic',
    date: '3/30/2024',
    userId: 1
  },
  {
    title: 'Authentication vs Authorization',
    content: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
    date: '3/30/2024',
    userId: 2
  },
  {
    title: 'Stackoverflow',
    content: 'This is some underrated website as it has most if not all, of the users errors that they encounter.',
    date: '3/30/2024',
    userId: 3
  },
  
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogpost;
