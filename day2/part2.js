// Input stuff
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [];
rl.on('line', c => {
    const raw = c.split(" ");

    const nums = raw[0].split("-");

    let first = parseInt(nums[0]);
    let second = parseInt(nums[1]);

    let letter = raw[1].replace(":", "");
    let password = raw[2];

    const line = {
        first,
        second,
        letter,
        password
    }

    lines.push(line)
});
rl.on("close", () => main(lines));


function main(passwords) {
    const total = passwords.length;
    let invalid = 0;
    for (let i = 0; i < total; i++) {
        const curr = passwords[i];
        const str = curr.password;
        const first = str[curr.first - 1];
        const second = str[curr.second - 1];

        const condition1 = first ? first === curr.letter : false;
        const condition2 = second ? second === curr.letter : false;

        // console.log(curr.letter);
        // console.log(str);
        // console.log(first, curr.first, second, curr.second);
        // console.log(condition1, condition2);

        if (condition1 === condition2) {
            invalid++;
        };
    }

    console.log(`Valid passwords: total - invald = ${total} - ${invalid} = `, total - invalid);
}