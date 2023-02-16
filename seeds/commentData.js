const { Comment } = require('../models');

const commentdata = [
  {
    user_comment: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    user_id: 1,
  },
  {
    user_comment: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
    user_id: 1,
  },
  {
    user_comment: `I have really loved learning about ORMS. It's really simplified the way I create queries in SQL!` ,
    user_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;