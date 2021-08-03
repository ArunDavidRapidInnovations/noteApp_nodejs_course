const path = require('path');
const chalk = require('chalk');
const yargs = require('yargs');
const total = require('./services/totalData');
const addData = require('./services/addData');
const readData = require('./services/readData');
const removeData = require('./services/removeData');
const editData = require('./services/editData');

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

// read data
yargs.command({
  command: 'read',
  description: 'This command prints all the financial entries',
  handler(argv) {
    readData(filePath);
  },
});

// get Total data
yargs.command({
  command: 'add',
  description: 'This command is to add an expenses or income',
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

// remove data form file
yargs.command({
  command: 'remove',
  description: 'This command is to remove an expenses or income',
  builder: {
    index: {
      describe: 'index of data to remove',
      demandOption: true,
      type: 'number',
    },
  },
  handler(argv) {
    removeData(filePath, argv.index);
  },
});

// Edit data form file
yargs.command({
  command: 'edit',
  description: 'This command is to Edit an expenses or income',
  builder: {
    index: {
      describe: 'index of data to remove',
      demandOption: true,
      type: 'number',
    },
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
    editData(filePath, argv.index, argv.type, argv.amount);
  },
});

yargs.parse();
