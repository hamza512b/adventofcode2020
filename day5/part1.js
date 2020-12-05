// Input stuff
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let lines = []
rl.on('line', l => {
  lines.push(l.trim());
});
rl.on("close", () => main(lines));



function main(lines) {
  const strlen = lines[0].length;


  let highastId = 0
  lines.map(str => {
    // const str = lines[0];
    let rows = [0, 127];
    let columns = [0, 7];
    for (let i = 0; i < strlen; i++) {
      if (str[i] === 'F') {
        rows = divide(rows, true);
        // console.log("F", rows);
      } else if (str[i] === 'B') {
        rows = divide(rows);
        // console.log("B", rows);
      } else if (str[i] === 'R') {
        columns = divide(columns);
        // console.log("R", columns);
      } else if (str[i] === 'L') {
        columns = divide(columns, true);
        // console.log("L", columns);
      }
    }

    let column, row;
    if (columns[0] === columns[1]) column = columns[0];
    else throw new Error(`Computation error`);
    if (rows[0] === rows[1]) row = rows[0];
    else throw new Error(`Computation error`);

    const id = (row * 8) + column;

    if (highastId < id) highastId = id;

    console.log(`${str}: row ${row}, column ${column}, seat ID ${id}`);
  });

  console.log(highastId);
}


function divide(int, down) {
  let diff = Math.abs(int[1] - int[0]) / 2;

  let newInterval;
  if (down) { // F
    newInterval = [int[0], Math.floor(diff) + int[0]]
  } else { // B
    newInterval = [int[1] - Math.floor(diff), int[1]];
  }

  return newInterval;
}