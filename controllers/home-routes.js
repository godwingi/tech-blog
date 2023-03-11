const router = require('express').Router();
const { Postdata , Comment, User } = require('../models');
// const withAuth = require('../utils/auth');
// const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const postData = await Postdata.findAll({
          include: [Comment, User]
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        console.log('this is the console log of POSTS --------> ', posts);
        res.render('homepage', {
                  posts,
                });
              } catch (err) {
                res.status(500).json(err);
              }
            });  
            
router.get('/login', async (req, res) => {
    try {
        res.render('login', {
                });
              } catch (err) {
                res.status(500).json(err);
              }
            }); 

module.exports = router;
