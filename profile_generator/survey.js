const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question('What activity do you like? ', (activity) => {
    rl.question(`What do you listen to while doing ${activity}? `, (music) => {
      rl.question('Which meal is your favourite? ', (meal) => {
        rl.question(`What is your favourite thing to eat during ${meal}? `, (food) => {
          rl.question('What is your favouite sport? ', (sport) => {
            rl.question('What is your super power? ', (superP) => {
              console.log(`My name is ${name}. I like to listen to ${music.toLowerCase()} while I do ${activity.toLowerCase()}. For ${meal.toLowerCase()}, I like to eat ${food.toLowerCase()}. My favourite sport is ${sport.toLowerCase()} and my super power is ${superP.toLowerCase()}`);
              rl.close();
            })
          })
        })
      })
    })
  })

  
});