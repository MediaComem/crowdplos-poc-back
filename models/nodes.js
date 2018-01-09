/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nodes', {
    gid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    highway: {
      type: DataTypes.STRING,
      allowNull: true
    },
    osmid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    geom: {
      type: DataTypes.ENUM(),
      allowNull: true
    }
  }, {
    tableName: 'nodes'
  });
};
