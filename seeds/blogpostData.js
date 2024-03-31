const { Blogpost } = require('../models');

const blogpostData = [
  {
    title: 'Why is MVC so important?',
    content: 'Lorem ipsum lskdjf ispojfp Lorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfp',
    date: '3/30/2024',
  },
  {
    title: 'Why is MVC so important?',
    content: 'Lorem ipsum lskdjf ispojfp Lorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfp',
    date: '3/30/2024',
  },
  {
    title: 'Why is MVC so important?',
    content: 'Lorem ipsum lskdjf ispojfp Lorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfpLorem ipsum lskdjf ispojfp',
    date: '3/30/2024',
  },
  
];

const seedBlogpost = () => Blogpost.bulkCreate(blogpostData);

module.exports = seedBlogpost;
