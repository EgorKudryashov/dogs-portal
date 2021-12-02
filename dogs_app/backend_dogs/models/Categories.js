module.exports = (sequelize, DataTypes) => {
    const Categories = sequelize.define('Categories', {
        category_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        }
    });
    Categories.associate = (models) => {
         Categories.belongsToMany(models.Breeds, {
             through: "Breed_has_category",
             onDelete: "cascade"
         })
    }
    return Categories
};