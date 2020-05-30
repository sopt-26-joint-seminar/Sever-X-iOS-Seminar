const express = require('express');
const router = express.Router();
const ItemModel = require('../model/item');

router.get('/item/preview', async (req, res, next) => {
  const result = await ItemModel.gahuizang();

  res.json(result);
});

module.exports = router;
