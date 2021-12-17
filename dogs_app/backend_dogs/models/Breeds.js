module.exports = (sequelize, DataTypes) => {
    const Breeds = sequelize.define('Breeds', {
        breed_name: {
            unique: true,
            type: DataTypes.STRING(100),
            allowNull: false,
            required: true,
            validate: {
                notNull: {
                    msg: 'Название породы - обязательный атрибут'
                }
            }
        },
        info: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Информация о породе - обязательный атрибут'
                }
            }
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: {
                    msg: 'Изображение необходимо'
                }
            }
        },
    },{
        timestamps: false
    });

    /*  Транзакции здесь  */
     Breeds.associate = (models) => {
          Breeds.belongsToMany(models.Users, {
              through: "User_like_breed",
              onDelete: 'cascade',
              timestamps: false
          })
          Breeds.hasOne(models.Likes, {
             onDelete: "cascade",
         })
     }
    return Breeds
}