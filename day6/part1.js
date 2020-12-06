// Input stuff
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [[]]
rl.on('line', l => {
  if (l) lines[lines.length - 1] += (l.trim());
  else lines.push("");
});
rl.on("close", () => main(lines));



function main(lines) {
  let sum = 0;
  let temp = [];
  for (let i = 0; i < lines.length; i++) {
    let str = lines[i];
    for (let j = 0; j < str.length; j++) {
      if (temp.includes(str[j])) continue;
      else temp.push(str[j]);
    }

    // console.log(str, ":", temp.toString(), temp.length);
    
    sum += temp.length;
    temp = [];
  }

  console.log(sum);
}