const { expect } = require('chai');
const { spawn } = require('child_process');

describe('1-stdin.js', () => {
  it('should prompt for a name and display the correct output for interactive input', function (done) {
    this.timeout(5000); // Extend timeout for process interaction

    const child = spawn('node', ['1-stdin.js']);

    let output = '';

    child.stdout.on('data', (data) => {
      output += data.toString();

      if (output.includes('Welcome to Holberton School, what is your name?')) {
        child.stdin.write('Alice\n'); // Simulate user input
      }

      if (output.includes('Your name is: Alice')) {
        child.stdin.end(); // End the input to trigger the 'end' event
      }
    });

    child.on('close', (code) => {
      expect(output).to.include('Welcome to Holberton School, what is your name?');
      expect(output).to.include('Your name is: Alice');
      expect(output).to.include('This important software is now closing');
      expect(code).to.equal(0);
      done();
    });
  });

  it('should handle piped input correctly', function (done) {
    this.timeout(5000); // Extend timeout for process interaction

    const child = spawn('node', ['1-stdin.js']);

    let output = '';

    child.stdout.on('data', (data) => {
      output += data.toString();
    });

    child.stdin.write('John\n');
    child.stdin.end(); // End the input to simulate piped input behavior

    child.on('close', (code) => {
      expect(output).to.include('Welcome to Holberton School, what is your name?');
      expect(output).to.include('Your name is: John');
      expect(output).to.include('This important software is now closing');
      expect(code).to.equal(0);
      done();
    });
  });
});
