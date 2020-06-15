const SearchModel = require('./../model/search');

const Util = require('../modules/utils');
const statuscode = require('../modules/statusCode');
const resMessage = require('../modules/responseMessage');


const search = {

    getSearch: async(req, res) => {
        const result = await SearchModel.getPopluarseach();
        return res.status(statuscode.OK).send(Util.success(statuscode.OK, resMessage.SEARCH_SUCCESS, result));
    }
}

module.exports = search;