const fs = require('fs');
const path = require('path');
const readline = require('readline');

let filePath = path.join(__dirname, 'README.md');

let file = readline.createInterface({
  input: fs.createReadStream(filePath),
  output: process.stdout,
  terminal: false,
});

let lineCount = 0;

file.on('line', (line) => {
  const num_of_times = line.split(':')[1];
  fs.writeFileSync(
    filePath,
    `# This Program Has been Run ==: ${parseInt(num_of_times) + 1} :== times`,
  );
  lineCount += 1;
});

if (lineCount == 0) {
  fs.appendFileSync(filePath, 'This Program Has been Run : 0 : times');
}

console.log(lineCount);
