module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            required: true
        },
        role: {
            type: DataTypes.STRING(40),
            allowNull: false,
            defaultValue: "USER" // ADMIN, MANAGER
        },
        info: {
            type: DataTypes.TEXT,
        },
        avatar_path: {
            type: DataTypes.STRING,
            allowNull: true
        },
        login: {
            unique: true,
            type: DataTypes.STRING(25),
            required: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING(),
            required: true,
            allowNull: false
        },
    });
    Users.associate = (models) => {
        Users.hasMany(models.Cards, {
            onDelete: 'cascade'
        })
    }
    return Users
};