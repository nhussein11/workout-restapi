import fs from 'fs';

const saveToDataBase = (DB:any)=>{
    fs.writeFileSync('./src/database/db.json', JSON.stringify(DB, null, 2),
    {
        encoding:"utf8"
    })
}

module.exports = saveToDataBase;