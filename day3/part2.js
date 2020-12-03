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
    const resualt =
        count_slope(lines, 1, 1) *
        count_slope(lines, 3, 1) *
        count_slope(lines, 5, 1) *
        count_slope(lines, 7, 1) *
        count_slope(lines, 1, 2);

    console.log(resualt);

}


function count_slope(lines, dX, dY) {
    const xLen = lines[0].length;

    let cX = 0;
    let cY = 0;

    let trees_count = 0;

    while (true) {

        cY += dY;
        if (cX + dX > xLen - 1) {
            const diff = Math.abs((cX + dX) - (xLen - 1));

            cX = diff - 1;
        } else {
            cX += dX;
        }

        if (!lines[cY]) break;

        if (lines[cY][cX] === '#') trees_count++;
    }

    return trees_count;
}