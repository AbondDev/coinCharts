const express = require('express');
const router = express.Router();
const coin = require('../controllers/coin.controller')

router.route('/')
  .get(coin.index)
module.exports = router
