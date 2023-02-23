const User = require('./User');
const Comment = require('./Comment');
const Postdata = require('./Postdata');


Postdata.belongsTo(User, {
  foreignKey: 'user_id',
    });

    User.hasMany(Postdata, {
      foreignKey: 'user_id',
    });

Comment.belongsTo(User, {
  foreignKey: 'user_id',
});

Comment.belongsTo(Postdata, {
  foreignKey: 'postdata_id',
});

Postdata.hasMany(Comment, {
    foreignKey: 'postdata_id',
  });

  User.hasMany(Comment, {
    foreignKey: 'user_id',
  });
  

module.exports = { User, Comment, Postdata }
