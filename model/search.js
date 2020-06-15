const pool = require('./pool');
const table = 'SEARCH';

const item = {
    getPopluarseach: async() => {
        const query = `SELECT NAME FROM ${table} ORDER BY COUNT DESC limit 10`;
        try{
            const result = await pool.queryParamArr(query);
            return result;
        } catch (err) {
            if(err.errno == 1062) {
                console.log('getSeach ERROR : ', err.errno, err.code);
                return -1;
            }
            console.log('getSeach ERROR : ', err);
            throw err;
        }
    }
    
}

module.exports = item;