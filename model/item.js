const pool = require('./pool');
const table = 'ITEM'

const item = {
    
    getBanner: async() => {
        const query = `SELECT ID, BANNERIMG FROM ${table} ORDER BY FRESH limit 3`
        try{
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            if(err.errno == 1062) {
                console.log('getPostByID ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getPostByID ERROR : ', err);
            throw err;
        }
    },

    getItemRecommend: async() => {
        //원래 한 10개정도만 보내는 것이지만, 데이터가 많지 않기에 다 보내는 걸로 한다. 
        const query = `SELECT * FROM ${table}`
        try{
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            if(err.errno == 1062) {
                console.log('getItemRecommend ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getItemRecommend ERROR : ', err);
            throw err;
        }
    },

    getPostById: async(id) => {
        const query = `SELECT * FROM ${table} WHERE id = ${id}`
        try{
            const result = await pool.queryParamArr(query);
            return result;
        } catch (err) {
            if(err.errno == 1062) {
                console.log('getPostById ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getPostById ERROR : ', err);
            throw err;
        }
    },

    getBasketCount: async() => {
        // basket이 1인 애들만 count
        const query = `SELECT count(*) FROM ${table} WHERE basket = 1`
        try{
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            if(err.errno == 1062) {
                console.log('getBasketCount ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getBasketCount ERROR : ', err);
            throw err;
        }
    },

    getAllBasket: async() => {
        const query = `SELECT * FROM ${table} WHERE basket = 1`
        try{
            const result = await pool.queryParam(query);
            return result;
        } catch (err) {
            if(err.errno == 1062) {
                console.log('getAllBasket ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getAllBasket ERROR : ', err);
            throw err;
        }
    }
     
}

module.exports = item;