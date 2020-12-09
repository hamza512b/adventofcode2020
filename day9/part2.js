// Input stuff
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});


let lines = [];
rl.on('line', l => {
    lines.push(+l);
});
rl.on("close", () => { main(); process.exit(0) });


// Constent
const faultyChecksum = 21806024;

function main() {
    for (let i = 0; i < lines.length; i++) {
        const res = look_checksum(i);
        if (isNaN(res) && Array.isArray(res)) {
            const arr = res.sort((a, b)=> a - b);
            console.log(arr);
            let checksum = 0;
            arr.map(item => checksum+=item);
            const first = arr.shift();
            const last = arr.pop();

            if (faultyChecksum === checksum) console.log(last + first);
        }
    }
}

function look_checksum(i) {
    const code = lines[i];
    const list = [code];
    let sum = code;
    let j = i;
    while (true) {
        j++;
        sum += lines[j];
        list.push(lines[j]);


        if (sum === faultyChecksum) return list;

        if (sum > faultyChecksum || j >= lines.length) return sum;
    }
}