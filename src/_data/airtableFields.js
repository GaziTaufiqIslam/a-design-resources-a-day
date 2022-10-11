var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyPzD4Sj5KeKU1Wb'}).base('appLApYmg3zCbvX2T');

const table = base('resources');

module.exports = async () => {
    // assign all records in an array called "records"
    const records = await table.select().firstPage();
    const tags = [];
    let j=0;
    // loop thorugh each records in records[]
    for(let i = 0; i < records.length; i++) {
        // assign all the tags of the current record[i] in an array of tagList[]
        const tagList = records[i].fields.tags;
        // loop through each tags in tagList[]
        for (let k = 0; k < tagList.length; k++) {
            // assign each tags from tagList[k] to each position in tags[]
            tags[j] = tagList[k];
            // increment the position of tags[]
            j++;
        }
    }

    // contains popular tags
    const popularTags = [];
    // remove duplicates from whole tags[]
    const uniqTags = [...new Set(tags)];
    // loop through each tags in unique tags[]
    for (let i = 0; i < uniqTags.length; i++) {
        // count occurances of each tag
        let counter = 0;
        // loop through all positions in tags[]
        for(let j = 0; j<tags.length; j++) {
            // check if uniqtags matches tags[] current positon
            if (tags[j] === uniqTags[i]) {
                // get occurances of the current uniq tag
                counter ++;
            }
        }
        // checks if occurances are more than 1
        if (counter > 1) {
            // tags with more than 1 occurances are pushed into popularTags[]
            popularTags.push(uniqTags[i]);
        }
    }
    // return all the possible tags in the 'tags' field of all the recors .note: doesn't show unused tags
    return popularTags;
}



