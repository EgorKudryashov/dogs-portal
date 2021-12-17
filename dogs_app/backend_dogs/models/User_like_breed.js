module.exports = (sequelize, DataTypes) => {
    const User_like_breed = sequelize.define('User_like_breed', {}, {timestamps: false});
    User_like_breed.associate = (models)=>{
        User_like_breed.belongsTo(models.Breeds);
        User_like_breed.belongsTo(models.Users)
    }
    return User_like_breed;
};