module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(75),
            allowNull: false
        },
        role: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
        },
        town: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.STRING,
        },
    });
    return Users
};