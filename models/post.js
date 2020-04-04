'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    userId:{
      type:DataTypes.INTEGER,
      allowNull: false
    },
  }, {});
  Post.associate = function(models) {
    // associations can be defined here
    Post.hasMany(models.Comment, {
      foreignKey: 'postId',
      as: 'comments',
      onDelete: 'CASCADE',
    });

    Post.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'author',
      onDelete: 'CASCADE',
    })
  };
  return Post;
};