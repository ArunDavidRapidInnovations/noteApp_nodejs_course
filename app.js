const fs = require('fs');
const path = require('path');
const readline = require('readline');
const chalk = require('chalk');

let filePath = path.join(__dirname, 'fin.csv');

let file = readline.createInterface({
  input: fs.createReadStream(filePath),
  output: process.stdout,
  terminal: false,
});

let lineCount = 0;

let total_expenses = 0;
let total_income = 0;

file.on('line', (line) => {
  let data = line.split(',');
  if (data[0] == 'Ex') {
    total_expenses = total_expenses + parseInt(data[1], 10);
    console.log('Expenses: ' + chalk.red(data[1]));
  } else {
    total_income = total_income + parseInt(data[1], 10);
    console.log('Income: ' + chalk.green(data[1]));
  }
});

file.on('close', function () {
  console.log(chalk.red.inverse(' Total Expenses: ' + total_expenses + 'Rs '));
  console.log(chalk.green.inverse(' Total Expenses: ' + total_income + 'Rs '));
  console.log(
    chalk.blue.inverse(' Net: ' + (total_income - total_expenses) + 'Rs '),
  );
});
