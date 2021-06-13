require('dotenv').config();
const seedBlog = require('./blogData');
const seedComment = require('./commentData');

const { User } = require('../models');
const userData = require('./userData.json');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await seedBlog();
  
  await seedComment();
  process.exit(0);
};

seedAll();
