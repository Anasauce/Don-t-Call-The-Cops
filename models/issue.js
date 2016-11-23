'use strict';

module.exports = function(sequelize, DataTypes) {
  var Issue = sequelize.define('Issue', {
    resource_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    phone_wrong: DataTypes.BOOLEAN,
    zip_wrong: DataTypes.BOOLEAN,
    type_wrong: DataTypes.BOOLEAN,
    is_active: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function( Models ) {
        Issue.belongsTo( Models.Resource )
      }
    }
  });
  return Issue;
};
