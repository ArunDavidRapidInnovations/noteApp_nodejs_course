const fs = require('fs');
const chalk = require('chalk');

const addData = (filePath, type, amount) => {
  if (type == 'Ex' || type == 'In') {
    fs.appendFileSync(filePath, `\n${type},${amount}`);
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
