// Input stuff
const { parse } = require('querystring');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin
});

let lines = [[]];
let i = 0;
rl.on('line', l => {
    if (l === "" || l === undefined) {
        ;
        lines.push([]);
        i++;
    } else {
        lines[i].push(l)
    }
});
rl.on("close", () => main(lines));



function main(lines) {
    const validKeys = [
        'hcl', 'iyr',
        'eyr', 'ecl',
        'pid', 'byr',
        'hgt'
    ];

    let valid = 0;
    let byr = 0,
        iyr = 0,
        eyr = 0,
        hgt = 0,
        hcl = 0,
        ecl = 0,
        pid = 0,
        cid = 0;
    for (let j = 0; j < lines.length; j++) {

        const valids = [];
        lines[j].map(line => praseL(line).map(item => {
            const key = item[0];
            const value = item[1];
            let valid = false;
            switch (key) {
                case "byr": // Ok
                    if (1920 <= +value && +value <= 2002) valid = true;
                    if (valid) byr++;
                    break;
                case "iyr": // Ok
                    if (2010 <= +value && +value <= 2020) valid = true;
                    if (valid) iyr++;
                    break;
                case "eyr": // Ok
                    if (2020 <= +value && +value <= 2030) valid = true;
                    if (valid) eyr++;
                    break;
                case "hgt":
                    if (value.includes("cm") && (150 <= parseInt(value) <= 193)) valid = true;
                    else if (value.includes("in") && (59 <= parseInt(value) <= 76)) valid = true;

                    if (valid) hgt++;

                    break;
                case "hcl":
                    const regx = /#[0-9A-Fa-f]{6}/g;
                    valid = regx.test(value);
                    if (valid) {
                        hcl++;
                    }
                    break;
                case "ecl":
                    const clrs = ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"];
                    if (clrs.includes(value)) {
                        valid = true;
                        ecl++;
                    }
                    break;
                case "pid":
                    if (value.length === 9) {
                        valid = true;
                        pid++;
                    }
                    break;
                case "cid":
                    valid = false;
                    cid++;
                    break;
            }
            if (valid) valids.push(valid)
        }));

        if (valids.length >= 7) {
            valid++;
            console.log();
            console.log(lines[j]);
            console.log("Valid");
        }
    }


    console.log(valid);


    // Stats
    console.log("byr: " + byr, "iyr: " + iyr, "eyr: " + eyr, "hgt: " + hgt, "hcl: " + hcl, "ecl: " + ecl, "pid: " + pid, "cid: " + cid);
}


function praseL(raw) {
    let keys = [];
    const arr = raw.split(" ");
    arr.forEach(item => keys.push(item.split(":")));
    return keys;
}