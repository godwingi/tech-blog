const router = require('express').Router();
const { Postdata, Comment, User } = require('../../models'); 

// router.get('/', async (req, res) => {
//   try {
//     const postData = await Postdata.findAll({
//       include: [Comment] 
//   });
//   console.log(postData);
//     res.render('homepage', {
//       postData,
//     });
//   } catch (err) {
//     res.status(500).json(err);
// }
// });

router.get('/', async (req, res) => {
  try {
      const postData = await Postdata.findAll({
        include: [Comment, User]
      });
      const posts = postData.map((post) => post.get({ plain: true }));
      console.log('this is the console log of POSTS --------> ', posts);
      res.render('dashboard', {
                posts,
              });
            } catch (err) {
              res.status(500).json(err);
            }
          }); 

router.get('/', async (req, res) => {
    try {
      const postData = await Postdata.findAll({
        include: [Comment] 
    });
      res.status(200).json(postData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req, res) => {
    try {
      const postData = await Postdata.create(req.body);
      res.status(200).json(postData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

  module.exports = router;