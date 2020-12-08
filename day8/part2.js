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


let log;
function main() {
  checkForLoop()
  let tempCmdsList = [...cmds];
  for (let i = 0; i < log.length; i++) {
    const cmd = tempCmdsList[log[i]];

    if (cmd[0] === "jmp") cmd[0] = "nop"
    else if (cmd[0] === "nop") cmd[0] = "jmp"

    const res = checkForLoop();

    if (res) return;

    tempCmdsList = [...cmds];
  }

  // if (prevCmds.includes(head)) {
  //   v++;
  //   debugCmds(head);
  // }
}


// let acc, head;
function checkForLoop() {
  let localLog = [];
  let nop = 0;
  let acc = 0;
  let head = 0;

  while (!localLog.includes(head)) {
    const cmd = cmds[head];

    if (head >= cmds.length) {

      console.log(acc);  
      return true
    };

    // No opersations
    if (nop > 0) { nop--; continue; }

    localLog.push(head);
    if (cmd[0] === "nop") nop += cmd[1] > 0 ? cmd[1] : 0;
    else if (cmd[0] === "acc") acc += cmd[1];
    else if (cmd[0] === "jmp") head += cmd[1] - 1;

    head++;
  }

  if (!log) log = localLog.filter(i => cmds[i][0] === "jmp" || cmds[i][0] === "nop").reverse();

  return false;
}

// function debug() {
//   prevCmd = cmds[cmdsList[v]][0];
//   cmds[cmdsList[v]][0] = prevCmd === "jmp" ? "nop" : "jmp";
//   log = [];
//   return main();
// }