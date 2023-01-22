const { Postdata } = require('../models');

const postdata = [
  {
    username: 'Xandromus',
    post_date: '5/8/2020',
    comment_id: 1,
  },
  {
    username: 'Xandromus',
    post_date: '5/8/2020',
    comment_id: 2,  
  }, 
  {
    username: 'Lernantino',
    post_date: '5/8/2020',
    comment_id: 3,
  },
];

const seedPostdata = () => Postdata.bulkCreate(postdata);

module.exports = seedPostdata;