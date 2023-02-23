const sequelize = require('../config/connection');
const seedComment = require('./commentData');
const seedPostdata = require('./postData');
const seedUser = require('./user');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedComment();
  
  await seedPostdata();

  process.exit(0);
};

seedAll();