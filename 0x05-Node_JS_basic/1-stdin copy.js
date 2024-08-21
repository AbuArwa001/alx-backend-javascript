const quiz = 'Welcome to Holberton School, what is your name?\n';
process.stdout.write(quiz);

process.stdin.on('data', (data) => {
  const input = data.toString().trim();
  process.stdout.write(`Your name is: ${input}\n`);
  process.exit(); // End the input to simulate the closing of the program
});

// Handling exit event to display closing message
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
