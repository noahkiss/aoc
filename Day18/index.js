const fs = require('fs');
const path = require('path');

function readInput(fileName) {
    // Construct the full path for the input file
    const filePath = path.join(__dirname, fileName);
    return fs.readFileSync(filePath, 'utf-8').trim().split('\n');
}

function sharedLogic(input) {
    // Common logic or preprocessing steps
    return input;
}

function partOne(input) {
    // Your solution for part one goes here
    return 0;
}

function partTwo(input) {
    // Your solution for part two goes here
    return 0;
}

function main() {
    const input = readInput('input.txt'); // Input file in the same directory as the script
    const processedInput = sharedLogic(input);

    console.log(`Part One: ${partOne(processedInput)}`);
    console.log(`Part Two: ${partTwo(processedInput)}`);
}

main();
