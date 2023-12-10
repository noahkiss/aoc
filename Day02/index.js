const fs = require('fs');
const path = require('path');

function readInput(fileName) {
    // Construct the full path for the input file
    const filePath = path.join(__dirname, fileName);
    return fs.readFileSync(filePath, 'utf-8').trim().split('\n');
}

function sharedLogic(input) {
    return input;
}

function partOne(input) {
    let sumIds = 0;

    const constraints = {
        'r': 12,
        'g': 13,
        'b': 14,
    };

    input.forEach(game => {
        const gameId = parseInt(game.match(/\d+/)[0]);
        let isValidGame = true;

        const matches = [...game.matchAll(/(\d+) (red|green|blue)/g)];
        for (const match of matches) {
            const number = parseInt(match[1]);
            const color = match[2][0];

            if (number > constraints[color]) {
                isValidGame = false;
                break;
            }
        }

        if (isValidGame) sumIds += gameId;
    });

    return sumIds;
}

function partTwo(input) {
    let sumPowers = 0;

    input.forEach(game => {
        const minReq = { 'r': 0, 'g': 0, 'b': 0 };

        const gameId = parseInt(game.match(/\d+/)[0]);

        const matches = [...game.matchAll(/(\d+) (red|green|blue)/g)];
        for (const match of matches) {
            const number = parseInt(match[1]);
            const color = match[2][0];

            if (number > minReq[color]) minReq[color] = number;
        }

        sumPowers += Object.values(minReq).reduce((acc, val) => acc * val, 1);
    });

    return sumPowers;
}

function main() {
    const input = readInput('input.txt'); // Input file in the same directory as the script
    const processedInput = sharedLogic(input);

    console.log(`Part One: ${partOne(processedInput)}`);
    console.log(`Part Two: ${partTwo(processedInput)}`);
}

main();
