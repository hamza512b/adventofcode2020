// Input stuff
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let lines = [[]];
let i = 0;
rl.on('line', l => {
  if (l === "" || l === undefined) {
    ;
    lines.push([]);
    i++;
  } else {
    lines[i].push(l)
  }
});
rl.on("close", () => main(lines));



function main(lines) {
  const validKeys = [
    'hcl', 'iyr',
    'eyr', 'ecl',
    'pid', 'byr',
    'hgt'
  ];

  let validPassowrd = 0;
  for (let j = 0; j < lines.length; j++) {
    const passport = [];
    lines[j].map(line => {
      const keys = praseL(line);
      passport.push(keys);
    })

    const keys = passport.flat(1);

    const valid = !validKeys.some(value => !keys.includes(value));
    
    console.log(valid);
    if (valid) validPassowrd++;
  }
  console.log(validPassowrd);

}


function praseL(raw) {
  let keys = [];
  const arr = raw.split(" ");
  arr.forEach(item => keys.push(item.split(":")[0]));
  return keys;
}