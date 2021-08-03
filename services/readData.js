const readline = require('readline');
const fs = require('fs');
const chalk = require('chalk');

const readData = (filePath) => {
  let total_expenses = 0;
  let total_income = 0;

  const dataBuffer = fs.readFileSync(filePath);
  const dataJson = JSON.parse(dataBuffer.toString());

  dataJson.data.forEach((a, index) => {
    if (a.type == 'Ex') {
      total_expenses = total_expenses + a.amount;
      console.log(index + '--Expense: ' + chalk.red(a.amount));
    } else {
      total_income = total_income + a.amount;
      console.log(index + '--Income: ' + chalk.green(a.amount));
    }
  });
};

module.exports = readData;
