// Input stuff
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [];
rl.on('line', l => {
    lines.push(l);
});
rl.on("close", () => main(lines));


function main(lines) {
    const xLen = lines[0].length;


    const dX = 3;
    const dY = 1;

    let cX = 0;
    let cY = 0;

    let trees_count = 0;

    while (true) {
        
        cY += dY;
        if (cX + dX > xLen - 1)  {
            console.log(cX + dX, xLen - 1);
            const diff = Math.abs((cX + dX )- (xLen - 1));
            console.log(diff);

            cX = diff - 1;
        } else {
            cX += dX;
        }

        if (!lines[cY]) break;

        if (lines[cY][cX] === '#') trees_count++;
    }

    console.log(trees_count);
}