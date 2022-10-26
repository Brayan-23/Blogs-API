module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        displayName: DataTypes.STRING,
        email: {
           type: DataTypes.STRING,
           unique: true,
        },
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    }, {
        underscored:true,
        timestamps: false,
    });

    User.associate = (models) => {
        User.hasMany(models.BlogPost, {
          as: 'posts',
          foreignKey: 'user_id',
        });
    };
    return User;
};