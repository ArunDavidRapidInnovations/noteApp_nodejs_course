const fs = require('fs');
const chalk = require('chalk');

const removeData = (filePath, indexToRemove) => {
  const dataBuffer = fs.readFileSync(filePath);
  const dataJson = JSON.parse(dataBuffer.toString());
  if (indexToRemove < dataJson.data.length) {
    const removedData = dataJson.data.splice(indexToRemove, 1);
    fs.writeFileSync(filePath, JSON.stringify(dataJson));
    if (removedData[0].type == 'Ex') {
      console.log('Removed Expenses: ' + chalk.red(removedData[0].amount));
    } else {
      console.log('Removed Income: ' + chalk.green(removedData[0].amount));
    }
  } else {
    console.log(chalk.red.inverse('Invalid index'));
  }
};

module.exports = removeData;
