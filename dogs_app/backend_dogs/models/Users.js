module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            required: true
        },
        role: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        info: {
            type: DataTypes.TEXT,
        },
        avatar_path: {
            type: DataTypes.STRING,
        },
        login: {
            type: DataTypes.STRING(15),
            required: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(15),
            required: true,
            allowNull: false
        },
    });
    Users.associate = (models) => {
        Users.hasMany(models.Cards, {
            onDelete: 'cascade'
        })
        Users.belongsToMany(models.Roles, {
            onDelete: 'cascade'
        })
    }
    return Users
};