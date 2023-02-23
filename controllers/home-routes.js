const router = require('express').Router();
const { Postdata } = require('../models');
// const withAuth = require('../utils/auth');
// const { Op } = require('sequelize');

router.get('/', async (req, res) => {
    try {
        const postData = await Postdata.findAll();
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('homepage', {
                  postData,
                });
              } catch (err) {
                res.status(500).json(err);
              }
            });

module.exports = router;
