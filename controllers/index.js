const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./home-routes');
const postRoute = require('./api/postdata');

router.use('/',homeRoute);
router.use('/', postRoute);
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;
