const { Blog } = require('../models');

const blogData = [
  {
    title: 'CSS',
    content: 'CSS is a great framework for styling HTML pages',
    creator: 'xkq2020@gmail.com',
    date_created: 'June 21, 2021 17:00:00',
  },
  {
    title: 'Bulima',
    content: 'Bulima is an even greater framework for styling than CSS HTML pages',
    creator: 'xkq2020@gmail.com',
    date_created: 'June 21, 2021 17:00:00',
  },
  {
    title: 'HandleBars',
    content: 'HandleBars is a templating framework',
    creator: 'sue@gmail.com',
    date_created: 'June 21, 2021 17:00:00',
  },
  {
    title: 'Sessions',
    content: 'Sessions is Tricky',
    creator: 'sue1@gmail.com',
    date_created: 'June 21, 2021 17:00:00',
  },
];

const seedBlog = () => Blog.bulkCreate(blogData);

module.exports = seedBlog;
