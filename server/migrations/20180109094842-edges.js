'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Edges', {
        gid: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        access: {
            type: Sequelize.STRING,
            allowNull: true
        },
        bridge: {
            type: Sequelize.STRING,
            allowNull: true
        },
        from: {
            type: Sequelize.STRING,
            allowNull: true
        },
        highway: {
            type: Sequelize.STRING,
            allowNull: true
        },
        key: {
            type: Sequelize.STRING,
            allowNull: true
        },
        lanes: {
            type: Sequelize.STRING,
            allowNull: true
        },
        length: {
            type: Sequelize.STRING,
            allowNull: true
        },
        maxspeed: {
            type: Sequelize.STRING,
            allowNull: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: true
        },
        oneway: {
            type: Sequelize.STRING,
            allowNull: true
        },
        osmid: {
            type: Sequelize.STRING,
            allowNull: true
        },
        ref: {
            type: Sequelize.STRING,
            allowNull: true
        },
        service: {
            type: Sequelize.STRING,
            allowNull: true
        },
        to: {
            type: Sequelize.STRING,
            allowNull: true
        },
        tunnel: {
            type: Sequelize.STRING,
            allowNull: true
        },
        width: {
            type: Sequelize.STRING,
            allowNull: true
        },
        geom: {
            type: Sequelize.GEOMETRY,
            allowNull: true
        }
    })
},

    down: (queryInterface, Sequelize) => {

    return queryInterface.dropTable('Edges');

}
};
