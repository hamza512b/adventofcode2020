// Input stuff
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});


let lines = [];
rl.on('line', l => {
  lines.push(+l);
});
rl.on("close", () => { main(); process.exit(0) });

function main() {
  const arr = lines.sort((a, b) => a - b);

  console.log(arr);
  let jolt1 = 1
  let jolt3 = 0;

  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];
    const next = arr[i + 1] || first + 3;
    const abs = Math.abs(first - next);
    console.log(abs);
    if (abs === 1) jolt1++
    else if (abs === 3) jolt3++;
  }

  console.log(arr);
  console.log(jolt1 * jolt3);
}