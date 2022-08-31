const fs = require('fs');
const { parse } = require('csv-parse');

const data = fs.readFileSync('data.csv')

parse(data, { columns: true, from_line: 2 }, (err, records) => {
  console.log(records[0])
  for (let i = 0; i < records.length; i++) {
    const record = records[i];
    const output = {
      tokenId: Number.parseInt(record.tokenId),
      name: record.name,
      description: record.description.replace(/\\n/g, '\n'),
      image_url: record.image_url,
      animation_url: record.animation_url,
      attributes: {
        place: record.place,
        'image quality': record['image quality']
      }
    }
    fs.writeFileSync('metadata/'+record.tokenId,JSON.stringify(output,null, '\t'))
  }
})
