const pool = require('./pool');

const item = {
    gahuizang: async() => {
        const query = `SELECT * FROM ITEM`;
        return await pool.queryParam(query);
        
    }
    
}

module.exports = item;