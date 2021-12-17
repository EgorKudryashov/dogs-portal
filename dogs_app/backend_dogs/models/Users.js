module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
        username: {
            type: DataTypes.STRING(100),
            allowNull: false,
            required: true,
            validate: {
                notNull: {
                    msg: 'Имя пользователя - обязательный атрибут'
                }
            }
        },
        login: {
            unique: true,
            type: DataTypes.STRING(),
            required: true,
            allowNull: false,
            validate: {
                isEmail: {
                    msg: 'Логин должен иметь формат Email'
                },
                notNull:{
                    msg: 'Логин - обязательный атрибут'
                }
            }
        },
        role: {
            type: DataTypes.STRING(10), // USER, MANAGER, MODERATOR, ADMIN
            allowNull: false,
            defaultValue: 'USER'
        },
        avatar_path: {
            type: DataTypes.STRING(),
            allowNull: true
        }
    },{
        timestamps: false
    });

    Users.associate = (models) => {
        Users.hasMany(models.Cards, {
            onDelete: 'set null'
        })
        Users.belongsToMany(models.Breeds, {
            through: 'User_like_breed',
            onDelete: "cascade",
            timestamps: false,
        })
    }
    return Users
};