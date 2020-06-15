const ItemModel = require('./../model/item');

const Util = require('../modules/utils');
const statuscode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');

const item = {

    getBanner: async(req, res) => {
        const result = await ItemModel.getBanner();
        res.status(statuscode.OK).send(Util.success(statuscode.OK, resMessage.BANNER_ITEM, {result}));
    },

    getItemRecommend: async(req, res) => {
        const result = await ItemModel.getItemRecommend();
        res.status(statuscode.OK).send(Util.success(statuscode.OK, resMessage.GET_ITEM_RECOMMEND, {result}));
    },

    getByIdItem: async(req, res) => {
        const id = req.params.id;
        const result = await ItemModel.getPostById(id);

        res.status(statuscode.OK).send(Util.success(statuscode.OK, resMessage.POST_GET_ID_SUCCESS, {result}));
    },

    getBasketCount: async(req, res) => {
        const result = await ItemModel.getBasketCount();
        res.status(statuscode.OK).send(Util.success(statuscode.OK, resMessage.GET_BASKET_NUM, result[0]['count(*)']));
    },
    
    getAllBasket: async(req, res) => {
        const result = await ItemModel.getAllBasket();
        res.status(statuscode.OK).send(Util.success(statuscode.OK, resMessage.GET_BASKET_SUCCESS, {result}));

    }
}

module.exports = item;