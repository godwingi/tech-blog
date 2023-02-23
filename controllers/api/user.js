const router = require('express').Router();
const { User, Comment } = require('../../models'); 

router.post('/', async (req, res) => {
    try {
      const userData = await User.create(req.body);
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({
        include: [Comment] 
    });
      res.status(200).json(userData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  module.exports = router;