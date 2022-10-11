var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyPzD4Sj5KeKU1Wb'}).base('appLApYmg3zCbvX2T');

const table = base('resources');

module.exports = async () => {
    const records = await table.select({view: 'Published'}).firstPage();
    return records;
};


