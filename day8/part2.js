// Input stuff
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

let prevCmds = [];
let cmdsList;
let prevCmd = "";
let v = 0;
function main() {
  checkForLoop();


  if (!cmdsList) cmdsList = prevCmds.filter(i => cmds[i][0] === "jmp" || cmds[i][0] === "nop").reverse();

  cmds[cmdsList[v]][0] = !prevCmd ? cmds[cmdsList[v]][0] : prevCmd;

  if (prevCmds.includes(head)) {
    v++;
    debugCmds(head);
  }
}


let acc, head;
function checkForLoop(params) {
  let nop = 0;
  acc = 0;
  head = 0;

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

  return true;
}

function debug() {
  prevCmd = cmds[cmdsList[v]][0];
  cmds[cmdsList[v]][0] = prevCmd === "jmp" ? "nop" : "jmp";
  prevCmds = [];
  return main();
}