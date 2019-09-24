let timeArray = process.argv.slice(2).sort(function(a, b) {
  return a - b;
});

for (let time of timeArray) {
  if (time >= 0) {
    setTimeout(() => {
      process.stdout.write('. \n');
    }, time * 1000);
  }
}