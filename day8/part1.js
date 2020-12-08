// Input stuff
const { debug } = require('console');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
});

let cmds = [];
rl.on('line', l => {
  let arr = l.split(" ");
  cmds.push([arr[0], +arr[1]]);
});
rl.on("close", () => { main(); process.exit(0) });

const prevCmds = [];
function main() {
  let nop = 0;
  let acc = 0;
  let head = 0;

  while (!prevCmds.includes(head)) {
    const cmd = cmds[head];

    // No opersations
    if (nop > 0) { nop--; continue; }

    prevCmds.push(head);
    if (cmd[0] === "nop") nop += cmd[1];
    else if (cmd[0] === "acc") acc += cmd[1];
    else if (cmd[0] === "jmp") head += cmd[1] - 1;

    head++;

  }

  console.log("res", acc);
}
