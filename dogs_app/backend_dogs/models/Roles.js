module.exports = (sequelize, DataTypes) => {
    const Roles = sequelize.define('Roles', {
        role_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    });
    Roles.associate = (models)=>{
         Roles.belongsToMany(models.Users, {
             through: "User_has_role",
             onDelete: "cascade"
         })
    }
    return Roles
};

