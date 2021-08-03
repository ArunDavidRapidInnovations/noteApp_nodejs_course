const fs = require('fs');
const chalk = require('chalk');

const addData = (filePath, type, amount) => {
  const dataBuffer = fs.readFileSync(filePath);
  const dataJson = JSON.parse(dataBuffer.toString());
  if (type == 'Ex' || type == 'In') {
    fs.appendFileSync(filePath, `\n${type},${amount}`);
    dataJson.data.push({
      type,
      amount,
    });
    fs.writeFileSync(filePath, JSON.stringify(dataJson));
    if (type == 'Ex') {
      console.log('Added Expenses: ' + chalk.red(amount));
    } else {
      console.log('Added Income: ' + chalk.green(amount));
    }
  } else {
    console.log(chalk.red.inverse('Invalid Type'));
  }
};

module.exports = addData;
