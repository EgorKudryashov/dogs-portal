module.exports = (sequelize, DataTypes) => {
    const Cards = sequelize.define('Cards', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
        },
    });
    Cards.associate = (models) => {
        Cards.belongsTo(models.Users, {})
    }
    return Cards
}