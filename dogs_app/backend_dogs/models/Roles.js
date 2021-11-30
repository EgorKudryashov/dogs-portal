module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('Roles', {
        role_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    });
    return Roles
};

