const express = require('express');
const router = express.Router({mergeParams: true});
const chart = require('../controllers/chart.controller')

router.route('/')
  .get(chart.render)
module.exports = router
