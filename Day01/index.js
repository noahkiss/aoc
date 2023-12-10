const fs = require('fs');
const path = require('path');

function readInput(fileName) {
    // __dirname gives the directory name of the current module, i.e., DayXX
    const filePath = path.join(__dirname, fileName);
    return fs.readFileSync(filePath, 'utf-8').trim().split('\n');
}

function partOne(input) {
    let sum = 0;
    input.forEach(coord => {
        const matches = coord.match(/\d/g);
        const nums = `${matches[0]}${matches[matches.length - 1]}`;
        sum += parseInt(nums);
    });
    return sum;
}

function partTwo(input) {
    const numConvert = {
        "one": "one1one",
        "two": "two2two",
        "three": "three3three",
        "four": "four4four",
        "five": "five5five",
        "six": "six6six",
        "seven": "seven7seven",
        "eight": "eight8eight",
        "nine": "nine9nine"
    };

    let sum = 0;
    input.forEach(coord => {
        let c = coord;
        Object.entries(numConvert).forEach(([key, value]) => {
            c = c.replace(new RegExp(key, 'g'), value);
        });

        const matches = c.match(/\d/g);
        const nums = `${matches[0]}${matches[matches.length - 1]}`;
        sum += parseInt(nums);
    });
    return sum;
}

function main() {
    const input = readInput('input.txt');
    console.log(`Part One: ${partOne(input)}`);
    console.log(`Part Two: ${partTwo(input)}`);
}

main();
