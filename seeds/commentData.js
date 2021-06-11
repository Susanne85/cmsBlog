const { Comment } = require('../models');

const commentData = [
  {
    post_comment: 'Absolutely',
    post_user: 'freddie@home',
    post_date: 'March 30, 2018',
    blog_id: 1
  },
  {
    post_comment: 'Fantasic',
    post_user: 'fredd@home',
    post_date: 'March 30, 2018',
    blog_id: 1
  },
  {
    post_comment: 'Absolutely so True',
    post_user: 'arthur@home',
    post_date: 'March 30, 2018',
    blog_id: 2
  },
  {
    post_comment: 'Absolutely soSOSO True',
    post_user: 'arthur@home',
    post_date: 'March 30, 2020',
    blog_id: 3
  },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;
