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

const getPostAndCategory = async (id) => {
    const throwError = { status: 404, message: 'Post does not exist' };
    const result = await BlogPost.findOne({
        where: { id },
        attributes: { exclude: ['user_id'] },
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    if (!result) throw throwError;
    return { type: null, message: result };
};

const updatedPostAndCategory = async ({ title, content }, id, user) => {
    const throwError = { status: 401, message: 'Unauthorized user' };
    const errorPost = { status: 404, message: 'Post does not exist' };
    const userAccept = await BlogPost.findOne({
        where: { id },
        attributes: { exclude: ['user_id'] },
        include: [{ model: User, as: 'user', attributes: { exclude: ['password'] } },
        { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    if (!userAccept) throw errorPost;
    if (userAccept.userId !== user) throw throwError;

    await BlogPost.update({ title, content }, {
        where: { id },
    });
    userAccept.title = title;
    userAccept.content = content;
    return { type: null, message: userAccept };
};

const deletedPost = async (id, user) => {
    const throwError = { status: 401, message: 'Unauthorized user' };
    const errorPost = { status: 404, message: 'Post does not exist' };

    const userAccept = await BlogPost.findOne({
        where: { id },
    });
    if (!userAccept) throw errorPost;
    if (userAccept.userId !== user) throw throwError;

    await BlogPost.destroy({
        where: { id },
    });
    return { type: null, message: userAccept };
};

module.exports = {
    transactionTest,
    getPostsAndCategories,
    getPostAndCategory,
    updatedPostAndCategory,
    deletedPost,
};
