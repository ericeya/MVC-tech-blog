const { Comment } = require('../models');

const commentData = [
  {
    content: "I agree that is why MVC is so important",
    blogpostId: [1],
    userId: 1
  },
  {
    content: "Authentication is needed for logging in! Two factor authentication is there for better security!",
    blogpostId: [2],
    userId: 3
  },
  {
    content: "My cat is typsdklfms.,dfmslakdjflaksjdfpisdojf sadflkjasld flaskjdf",
    blogpostId: [3],
    userId: 2
  },
 
  
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
