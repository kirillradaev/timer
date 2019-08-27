const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b')
  process.stdout.write('\x07');
  if (key === '\u0003') {
    process.exit();
  } for ( let i = 0; i < key.length; i++){
     if(Number) {
      setTimeout(() => {
        process.stdout.write('\x07');
        }, key * 1000);
     }
  }
});

