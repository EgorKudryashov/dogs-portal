module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('Roles', {
        role_name: {
            type: DataTypes.STRING(10),
            allowNull: false,
            defaultValue: "USER" // ADMIN, MANAGER, MODERATOR
        },
        UserId:{
            type: DataTypes.INTEGER,
            primaryKey: true
        }
    },{
        timestamps: false
    });
    Roles.associate = (models) => {
        Roles.belongsTo(models.Users, {})
    }
    return Roles
};

