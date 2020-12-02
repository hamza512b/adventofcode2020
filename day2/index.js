// Input stuff
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [];
rl.on('line', c => {
    const raw = c.split(" ");

    const nums = raw[0].split("-");

    let min = parseInt(nums[0]);
    let max = parseInt(nums[1]);

    let letter = raw[1].replace(":", "");
    let password = raw[2];

    const line = {
        min,
        max,
        letter,
        password
    }

    lines.push(line)
});
rl.on("close", () => main(lines));


function main(passwords) {
    const length = passwords.length;
    let invalid = 0;
    for (let i = 0; i < length; i++) {
        const curr = passwords[i];
        const regaxPatter = new RegExp(curr.letter, 'g');
        console.log(curr.password);
        const occurrence = curr.password.match(regaxPatter)?.length || 0;


        if (occurrence > curr.max || occurrence < curr.min) invalid++;
    }

    console.log(`Valid passwords: total - invald = ${length} - ${invalid} = `, length - invalid);
}