const sequelize = require('../config/connection');
const seedComment = require('./commentData');
const seedPostdata = require('./postData');
const seedUser = require('./user');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();
  
  await seedPostdata();

  await seedComment();

  process.exit(0);
};

seedAll();