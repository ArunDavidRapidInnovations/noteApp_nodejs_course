const fs = require('fs');
const path = require('path');
const readline = require('readline');

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
  } else {
    total_income = total_income + parseInt(data[1], 10);
  }
  // console.log(parseInt(data[1]));
});

file.on('close', function () {
  console.log(total_expenses);
  console.log(total_income);
});
