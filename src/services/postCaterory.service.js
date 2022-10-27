const { BlogPost, sequelize, PostCategory, Category, User } = require('../models');
const { mapBulkCreate } = require('../utils/generateArrayBulk');

const transactionTest = async ({ title, content, categoryIds }, user) => {
    try {
    const result = await sequelize.transaction(async (t) => {
            const createPost = await BlogPost
            .create({ title, content, userId: user.id }, { transaction: t });

            const map = mapBulkCreate(categoryIds, createPost.id);

             await PostCategory
            .bulkCreate(map, { transaction: t });
           return createPost; 
    });
    return result;
 } catch (err) {
    console.log(err);
 }
};

const getPostsAndCategories = async () => {
    const result = await BlogPost.findAll({
        attributes: { exclude: ['user_id'] },
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
    { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return { type: null, message: result };
};

module.exports = {
    transactionTest,
    getPostsAndCategories,
};
