module.exports = (sequelize, DataTypes) => {
    const Breeds = sequelize.define('Breeds', {
        breed_name: {
            type: DataTypes.STRING(75),
            allowNull: false,
            primaryKey: true,
        },
        info: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.STRING(25),
        },
        destiny: {
            type: DataTypes.STRING(25),
        },
        wool: {
            type: DataTypes.STRING(25),
        }
    });
    return Breeds
}