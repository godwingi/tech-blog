const sequelize = require('../config/connection');
const seedComment = require('./commentData');
const seedPostdata = require('./postData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedComment();

  await seedPostdata();

  process.exit(0);
};

seedAll();