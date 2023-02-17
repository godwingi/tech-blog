const router = require('express').Router();
const { Comment, Postdata } = require('../../models'); 

router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [Postdata] 
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
    try {
      const commentData = await Comment.create(req.body);
      res.status(200).json(commentData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;