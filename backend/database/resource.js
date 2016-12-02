'use strict';

module.exports = function(sequelize, DataTypes) {
  var Resource = sequelize.define('Resource', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { min: -255, max: 255 }
    },
    resource_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { min: -13, max: 13 }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    website_url: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    zipcode: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      validate: { min: -9, max: 9 }
    },
    create_by: DataTypes.STRING,
    description: DataTypes.STRING
  },
    {
      classMethods: {
        associate: function( Models ) {
          Resource.hasMany( Models.Comment )
          Resource.hasMany( Models.Issue )
        }
      }
  });
  return Resource;
};
