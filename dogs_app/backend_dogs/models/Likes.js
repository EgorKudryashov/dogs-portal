module.exports = (sequelize, DataTypes) => {
    const Likes = sequelize.define('Likes', {
        BreedId:{
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        count:{
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 0,
        },
    }, {
        timestamps: false
    });
    Likes.associate = (models) => {
        Likes.belongsTo(models.Breeds, {})
    }
    return Likes
};