'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    description: DataTypes.STRING,
    userId:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
    postId:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Comment.associate = function(models) {
    // associations can be definedhere
    Comment.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author'
    })
    Comment.belongsTo(models.Post, {
      foreignKey: 'postId',
      as: 'post'
    });
  };
  return Comment;
};