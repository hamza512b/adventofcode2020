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
  if (arr.length !== 0) lines[key] = arr.map(rule => {
    const quantiy = parseInt(rule);
    const color = rule.replace(quantiy + " ", "");

    return {
      color: color.trim(),
      quantiy
    }
  });
});
rl.on("close", () => main());


let keys = ["shiny gold"];
function main() {
  let sum = 0;

  // Look for keys
  for (const key in lines) {
    if (lines.hasOwnProperty(key)) {
      const rule = lines[key];
      const hasIt = rule.some(bags => keys.includes(bags.color));
      if (hasIt) {
        if (!keys.includes(key)) {
          keys.push(key);
          console.log(keys);
          return main(keys);
        } else sum++;
      }
    }
  }
  console.log(keys);
  console.log(sum);
}