/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Edges', {
    gid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    access: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bridge: {
      type: DataTypes.STRING,
      allowNull: true
    },
    from: {
      type: DataTypes.STRING,
      allowNull: true
    },
    highway: {
      type: DataTypes.STRING,
      allowNull: true
    },
    key: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lanes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    length: {
      type: DataTypes.STRING,
      allowNull: true
    },
    maxspeed: {
      type: DataTypes.STRING,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    oneway: {
      type: DataTypes.STRING,
      allowNull: true
    },
    osmid: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ref: {
      type: DataTypes.STRING,
      allowNull: true
    },
    service: {
      type: DataTypes.STRING,
      allowNull: true
    },
    to: {
      type: DataTypes.STRING,
      allowNull: true
    },
    tunnel: {
      type: DataTypes.STRING,
      allowNull: true
    },
    width: {
      type: DataTypes.STRING,
      allowNull: true
    },
    geom: {
      type: DataTypes.ENUM(),
      allowNull: true
    }
  }, {
    tableName: 'edges'
  });
};
