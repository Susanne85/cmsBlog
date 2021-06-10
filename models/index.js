
const User    = require('./User');
const Comment = require('./Comment');
const Blog    = require('./Blog');

//Blog.belongsTo(Comment, {
//  foreignKey: 'comment_id',
 // onDelete: 'CASCADE',  
//});

Blog.hasMany(Comment, {
  foreignKey: 'blog_id',
});

module.exports = { Comment, Blog, User};
