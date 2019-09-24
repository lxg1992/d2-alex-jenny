//process.stdout.write('hello from spinner1.js... \rheyyy\n');
let time = 100;
let spinArray = ['|','/','-','\\','|\n'];

for(const item of spinArray){
  setTimeout(() => {
    process.stdout.write(item + '\r');
  }, time += 200)
}



