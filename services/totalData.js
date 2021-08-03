const readline = require('readline');
const fs = require('fs');
const chalk = require('chalk');

const getTotal = (filePath) => {
  let total_expenses = 0;
  let total_income = 0;

  const dataBuffer = fs.readFileSync(filePath);
  const dataJson = JSON.parse(dataBuffer.toString());

  dataJson.data.forEach((a) => {
    if (a.type == 'Ex') {
      total_expenses = total_expenses + a.amount;
      console.log('Expense: ' + chalk.red(a.amount));
    } else {
      total_income = total_income + a.amount;
      console.log('Income: ' + chalk.green(a.amount));
    }
  });

  console.log(chalk.red.inverse(' Total Expenses: ' + total_expenses + 'Rs '));
  console.log(chalk.green.inverse(' Total Expenses: ' + total_income + 'Rs '));
  console.log(
    chalk.blue.inverse(' Net: ' + (total_income - total_expenses) + 'Rs '),
  );
};

module.exports = getTotal;
