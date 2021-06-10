require('dotenv').config();
const seedBlog = require('./blogData');
const seedComment = require('./commentData');
//const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedBlog();
  
  await seedComment();
  process.exit(0);
};

seedAll();
