
const { EOL } = require('os');

let i = "";
process.stdin.on('data', c => i += c)

process.stdin.on('end', () => {
    let lines = i.split(EOL);

    lines = lines.map(line => parseInt(line));

    main(lines);
})


function main(expenses) {
    const length = expenses.length;

    console.log(expenses);
    // Find every possilbe comination

    for (let i = 0; i < length; i++) {
        let first = expenses[i];
        for (let j = 0; j < length; j++) {
            let second = expenses[j];
            for (let k = 0; k < length; k++) {
                let third = expenses[k];
                if (i === k) continue;
                else if (i === j) continue;
                else if (k === j) continue;
                if (third + second + first === 2020) {
                    console.log(third, "+", second, "+", first, "=", third + second + first);
                    console.log(third, "*", second, "*", first, "=", third * second * first);
                }
            }

        }
    }
}