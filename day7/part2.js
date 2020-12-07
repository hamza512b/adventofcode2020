// Input stuff
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let lines = {

};
rl.on('line', l => {
  let str = l.replace(" bags contain", ",");
  if (str.includes(", no other bags")) str = str.replace(", no other bags", "");
  else str = str.replace(/ bag(s)?/g, "");
  str = str.replace(".", "");

  const arr = str.split(",")
  const key = arr.shift();
  lines[key] = arr.map(rule => {
    const quantiy = parseInt(rule);
    const color = rule.replace(quantiy + " ", "");

    return {
      color: color.trim(),
      quantiy
    }
  });
});
let sum = 0;

function main(key, qty) {
  lines[key].map(key => {
    sum += key.quantiy * qty;
    main(key.color, qty * key.quantiy);
  });
}

rl.on("close", () => {
  main("shiny gold", 1);
  console.log(sum);
});
