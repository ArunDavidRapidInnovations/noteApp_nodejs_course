const path = require('path');
const chalk = require('chalk');
const yargs = require('yargs');
const total = require('./services/totalData');
const addData = require('./services/addData');

let filePath = path.join(__dirname, 'data.json');

// Customize yargs version
yargs.version('1.1.0');

// get Total data
yargs.command({
  command: 'total',
  description:
    'This command prints all the financial entries and total expenses and income.',
  handler(argv) {
    total(filePath);
  },
});

// get Total data
yargs.command({
  command: 'add',
  description:
    'This command is to add an expenses or income to the fin.csv file',
  builder: {
    type: {
      describe: 'Expense or income',
      demandOption: true,
      type: 'string',
    },
    amount: {
      describe: 'Amount of money transferred',
      demandOption: true,
      type: 'number',
    },
  },
  handler(argv) {
    addData(filePath, argv.type, argv.amount);
  },
});

yargs.parse();
