module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', 
    {
        postId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER
    }, {
        tableName: 'blog_posts',
        underscored: true,
    });

    PostCategory.associate = (models) => {
        models.Category.belongsToMany(models.BlogPost, {
          as: 'posts',
          foreignKey: 'post_id',
          otherKey: 'category_id',
          through: PostCategory,
        });
    
        models.BlogPost.belongsToMany(models.Category, {
          as: 'categories',
          foreignKey: 'category_id',
          otherKey: 'post_id',
          through: PostCategory,
        });
      }
    

    return PostCategory;
};