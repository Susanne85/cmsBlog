
const User    = require('./User');
const Comment = require('./Comment');
const Blog    = require('./Blog');

Comment.belongsTo(Blog, {
});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
});

module.exports = { Comment, Blog, User};
