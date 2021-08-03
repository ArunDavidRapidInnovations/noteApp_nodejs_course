const fs = require('fs');
const chalk = require('chalk');

const editData = (filePath, indexToEdit, type, amount) => {
  const dataBuffer = fs.readFileSync(filePath);
  const dataJson = JSON.parse(dataBuffer.toString());
  if (indexToEdit < dataJson.data.length && (type == 'Ex' || type == 'In')) {
    const oldData = dataJson.data[indexToEdit];
    dataJson.data.splice(indexToEdit, 1, {
      type,
      amount,
    });
    fs.writeFileSync(filePath, JSON.stringify(dataJson));
    console.log(
      'Edited Entry ' +
        indexToEdit +
        ' from ' +
        (oldData.type == 'Ex'
          ? 'Expense ' + chalk.red(oldData.amount)
          : 'Income ' + chalk.green(oldData.amount)) +
        ' to ' +
        (dataJson.data[indexToEdit].type == 'Ex'
          ? 'Expense ' + chalk.red(dataJson.data[indexToEdit].amount)
          : 'Income ' + chalk.green(dataJson.data[indexToEdit].amount)),
    );
  } else {
    console.log(chalk.red.inverse('Invalid Type or index'));
  }
};

module.exports = editData;
