module.exports = (sequelize, DataTypes) => {
    const Cards = sequelize.define('Cards', {
        title: {
            type: DataTypes.STRING(30),
            allowNull: false,
            required: true,
            validate: {
                notNull:{
                    msg: 'Заголовок - обязательный атрибут'
                }
            }
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
            required: true,
            validate: {
                notNull:{
                    msg: 'Контент - обязательный атрибут'
                }
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull:{
                    msg: 'Изображение необходимо'
                }
            }
        },
    },{
        timestamps: false
    });
    Cards.associate = (models) => {
        Cards.belongsTo(models.Users, {})
    }
    return Cards
}