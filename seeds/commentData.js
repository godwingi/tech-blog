const { Comment } = require('../models');

const commentdata = [
  {
    title: 'Why is MVC so important?',
    // post_date: '5/8/2020',
    user_comment: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    user_id: 1,
  },
  {
    title: 'Authentication vs. Authorization?',
    // post_date: '5/8/2020',
    user_comment: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
    user_id: 1,
  },
  {
    title: 'Object-Relational Mapping',
    // post_date: '5/8/2020',
    user_comment: `I have really loved learning about ORMS. It's really simplified the way I create queries in SQL!` ,
    user_id: 2,
  },
];

const seedComment = () => Comment.bulkCreate(commentdata);

module.exports = seedComment;