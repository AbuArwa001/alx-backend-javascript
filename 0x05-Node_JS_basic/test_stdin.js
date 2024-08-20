const { spawn } = require('child_process');

const child = spawn('node', ['1-stdin.js']);

let output = '';

child.stdout.on('data', (data) => {
  output += data.toString();
});

child.stdin.write('John Doe\n');

child.on('close', () => {
  console.log('Output:', output);
  // You can assert or check the content of 'output' here for validation
});
