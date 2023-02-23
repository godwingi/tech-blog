const router = require('express').Router();
const { Postdata } = require('../models');
// const withAuth = require('../utils/auth');
// const { Op } = require('sequelize');

// const postdata = require('../models/postdata');

// router.get('/:id', async (req, res) => {
//     try {
//         const postData = await Postdata.findAll();
//         const posts = postData.map((post) => post.get({ plain: true }));
//         res.render('homepage', posts[req.params.id - 1]);
//               } catch (err) {
//                 res.status(500).json(err);
//               }
//             });

// router.get('/', async (req, res) => {
//     try {
//         const postData = await Postdata.findAll();
//         const posts = postData.map((post) => post.get({ plain: true }));
     
//         res.render('homepage', {
//                   posts,
//                 });
//               } catch (err) {
//                 res.status(500).json(err);
//               }
//             });

// router.get('/:num', async (req, res) => {
//   return res.render('homepage', postdata[req.params.num -1]);
// });


module.exports = router;
