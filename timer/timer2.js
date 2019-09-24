const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

process.stdin.on('data', (stdin) => {
  if (stdin === 'b') {
    process.stdout.write('. \n');
  } else if (stdin > 0 && stdin < 10) {
    process.stdout.write(`setting timer for ${stdin} seconds... \n`)
    setTimeout(() => {
      process.stdout.write('.  \n');
    }, stdin * 1000);
  }
  if (stdin === '\u0003') {
    process.stdout.write('Thanks for using me, ciao! \n')
    process.exit();
  }
});