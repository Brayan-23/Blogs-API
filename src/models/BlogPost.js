module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        title: DataTypes.STRING,
        content: DataTypes.STRING,
        userId: DataTypes.STRING,
        published:{type: DataTypes.DATE, 
            defaultValue: DataTypes.NOW,
        },
        updated: { type: DataTypes.DATE, 
        defaultValue: DataTypes.NOW,
    }, 
    }, {
        tableName: 'blog_posts',
        underscored: true,
        timestamps: false,
    });

    BlogPost.associate = (models) => {
        BlogPost.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user',
        })
    };

    return BlogPost;
};