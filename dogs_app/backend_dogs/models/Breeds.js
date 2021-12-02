module.exports = (sequelize, DataTypes) => {
    const Breeds = sequelize.define('Breeds', {
        breed_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        info: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });
     Breeds.associate = (models) => {
          Breeds.belongsToMany(models.Categories, {
              through: "Breed_has_category",
              onDelete: 'cascade'
          })
     }
    return Breeds
}