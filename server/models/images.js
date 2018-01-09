'use strict';
module.exports = (sequelize, DataTypes) => {
  var Images = sequelize.define('Images', {
    url: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Images.hasOne(User);

  return Images;
};