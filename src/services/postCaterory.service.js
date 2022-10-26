const { BlogPost, sequelize, PostCategory } = require('../models');
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

module.exports = {
    transactionTest,
};
