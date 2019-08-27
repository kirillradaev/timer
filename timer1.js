
const num = process.argv.slice(2);

for (let i = 0; i < num.length; i++) {
  if(isNaN(num[i])) {
    // console.log('sdgsdf');
  }
  else if(num[i] < 0) {
    // console.log('nothing');
  } 
  else {
    setTimeout(() => {
    process.stdout.write('\x07');
    }, num[i] * 1000);
  }
}


