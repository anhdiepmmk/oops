const fs = require('fs').promises;
const notifier = require('node-notifier');
const _ = require('lodash');
const path = require('path');

const main = async () => {
  const filePath = path.resolve(__dirname, 'words.txt');
  const fileContent = await fs.readFile(filePath);
  const words = _.split(fileContent, '\n');
  const word = _.sample(words);

  notifier.notify({
    title: 'English flash card',
    message: word,
  });
};


// main().then(() => {
//   console.log('main ok');
// }).catch(error => {
//   console.log('main error: ', error);
// });

setInterval(() => {
  main().then(() => {
    console.log('main ok');
  }).catch(error => {
    console.log('main error: ', error);
  });
}, 5000);