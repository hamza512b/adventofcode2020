// Input stuff
const { debug } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});


let lines = [];
rl.on('line', l => {
  lines.push(+l);
});
rl.on("close", () => { main(); process.exit(0) });


// Constents
const pream = 25;

function main() {
  for (let i = pream; i < lines.length; i++) {
    const code = lines[i];
    if (!look_checksum(i)) return console.log(code);
  }
}


function look_checksum(i) {
  const code = lines[i];
  const guesses = [];
  for (let j = i - pream; j < i; j++) {
    const prevCode1 = lines[j];
    let trys = 0;
    for (let h = i - pream; h < i; h++) {
      const prevCode2 = lines[h];
      trys++;
      if (prevCode1 + prevCode2 === code) {
        guesses.push(true);
        return true;
      } else if (trys >= pream) {
        guesses.push(false);
      }
    }
  }

  return false;
}