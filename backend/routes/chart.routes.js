const express = require('express');
const router = express.Router();
const tether = require('../controllers/tether.controller')

router.route('/tether')
  .get(tether.renderChart)
module.exports = router
