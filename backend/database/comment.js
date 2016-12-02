'use strict';

module.exports = function( sequelize, DataTypes ) {
  var Comment = sequelize.define( 'Comment', {
    response_time: DataTypes.STRING,
    use_again: DataTypes.INTEGER,
    helpful: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    classMethods: {
      associate: function( Models ) {
        Comment.belongsTo( Models.Resource )
      }
    }
  });
  return Comment;
};
