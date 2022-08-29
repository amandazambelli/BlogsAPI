const verifyPost = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  
  if (categoryIds.length < 1) {
    return res.status(400).json({ message: '"categoryIds" not found' });
  }
  
  next();
};
  
module.exports = verifyPost;
