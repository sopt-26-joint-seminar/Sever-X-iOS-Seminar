var express = require('express');
var router = express.Router();

const searchController = require('../controller/search');

//인기 검색어
router.get('/search', searchController.getSearch);

module.exports = router;