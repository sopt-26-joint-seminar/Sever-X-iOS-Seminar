const express = require('express');
const router = express.Router();

const ItemController = require('../controller/item');


//Banner의 5개 ITEM GET
router.get('/banner', ItemController.getBanner);
//추천상품
router.get('/recommend', ItemController.getItemRecommend);
//id에 해당하는 ITEM 조회
router.post('/:id',ItemController.getByIdItem);
//장바구니 ALL
router.get('/basket', ItemController.getAllBasket);
//장바구니 count
router.get('/basket/count', ItemController.getBasketCount);


module.exports = router;