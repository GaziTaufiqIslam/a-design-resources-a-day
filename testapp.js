var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyPzD4Sj5KeKU1Wb'}).base('appLApYmg3zCbvX2T');

const table = base('resources');
const tags = [];

const getRecords = async () => {
  const records = await table.select().firstPage();
  const atDate = records[1].fields.date;
  const myDate = new Date(atDate).toLocaleDateString(undefined, {year: '2-digit',
  month: 'short',
  day: 'numeric',});
  const options = {
    year: '2-digit',
    month: 'long',
    day: 'numeric',
  };
  const options2 = {
    dateStyle: 'long'
  }
  console.log(myDate);

  let j=0;
  for(let i = 0; i < records.length; i++) {
    const tagList = records[i].fields.tags;
    for (let k = 0; k < tagList.length; k++) {
      tags[j] = tagList[k];
      j++;
    }
  }
  const uniqTags = [...new Set(tags)];
  // console.log(uniqTags);
}
getRecords();


// console.log(records);


