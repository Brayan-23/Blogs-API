const {
    transactionTest,
    getPostsAndCategories,
    getPostAndCategory,
    updatedPostAndCategory,
    deletedPost,
searchPost } = require('../services/postCaterory.service');

const testTransaction = async (req, res) => {
    const corpo = req.body;
    const result = await transactionTest(corpo, req.user);
    return res.status(201).json(result);
};

const postsAndCategories = async (req, res) => {
    const { message } = await getPostsAndCategories();
    return res.status(200).json(message);
};

const postAndCategory = async (req, res) => {
    const { id } = req.params;
    const { message } = await getPostAndCategory(id);
    return res.status(200).json(message);
};

const updatePostAndCategory = async (req, res) => {
    const { id } = req.params;
    const corpo = req.body;
    const { message } = await updatedPostAndCategory(corpo, id, req.user.id);
    return res.status(200).json(message);
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    await deletedPost(id, req.user.id);
    return res.status(204).json();
};

const postSearch = async (req, res) => {
    const { q } = req.query;
    const { message } = await searchPost(q);
    return res.status(200).json(message);
};

module.exports = {
    testTransaction,
    postsAndCategories,
    postAndCategory,
    updatePostAndCategory,
    deletePost,
    postSearch,
};