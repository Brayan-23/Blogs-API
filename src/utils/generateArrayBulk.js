const postId = 'post_id';
const categoryId = 'category_id';
const mapBulkCreate = (categoryIds, id) => {
const categoriesObj = categoryIds
.map((elem) => {
   const obj = {};
   obj[postId] = id;
   obj[categoryId] = elem;
   return obj;
});
return categoriesObj; 
};

module.exports = {
    mapBulkCreate,
};
