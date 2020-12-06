// Input stuff
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [[]]
rl.on('line', l => {
    if (l) lines[lines.length - 1].push(l.trim());
    else lines.push([]);
});
rl.on("close", () => main(lines));

function main(groups) {
    let sum = 0;
    
    for (let i = 0; i < groups.length; i++) {
        let group = groups[i];
        let temp = {};
        for (let j = 0; j < group.length; j++) {
            let person = group[j];
            for (let h = 0; h < person.length; h++) {
                const letter = person[h];

                // If letter doesn't exits
                if (!temp[letter]) temp[letter] = 0;

                temp[letter]++;
            }
        }

        // console.log(temp);
        // console.log();
        for (const key in temp) {
            if (temp.hasOwnProperty(key)) {
                let letter = temp[key];

                // console.log(letter, group.length, letter % group.length);
                if (letter % group.length === 0) {
                    sum++;
                }
            }
        }
    }

    console.log(sum);
}