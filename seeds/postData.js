const { Postdata } = require('../models');

const postdata = [
  {
    title:'Why is MVC so important?',
    content:'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    comment_id: 1,
  },
  {
    title: 'Placeholder 1',
    content: 'Lorem Ipsum is Lorem Ipsum',
    comment_id: 2,  
  }, 
  {
    username: 'Placeholder 2',
    post_date: 'Lorem Ipsum is Lorem Ipsum',
    comment_id: 3,
  },
];

const seedPostdata = () => Postdata.bulkCreate(postdata);

module.exports = seedPostdata;