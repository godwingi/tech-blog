const User = require('./User');
const Comment = require('./Comment');
const Postdata = require('./Postdata');

User.hasMany(Comment, {
  foreignKey: 'user_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Postdata.hasMany(Comment, {
    foreignKey: 'comment_id',
  });
  
Comment.belongsTo(Postdata, {
foreignKey: 'comment_id',
  });

module.exports = { User, Comment, Postdata };
