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

// Something is broken here.
function partOne(input) {
    var lines = input.length - 1;
    var line_len = input[0].length;
    var target = /[^\d\. ]/g;
    var sum = 0;

    console.log(`Initial variables: lines = ${lines}, line_len = ${line_len}, target = ${target}, sum = ${sum}`);

    input.forEach((text, line) => {
        if (line === 0) {
            var this_line = `${text} `;
            var next_line = `${input[line + 1]} `;

            console.log(`Processing first line: this_line = ${this_line}, next_line = ${next_line}`);
            compare(null, this_line, next_line);
        } else if (line === lines) {
            var last_line = `${input[line - 1]} `;
            var this_line = `${text} `;

            console.log(`Processing last line: last_line = ${last_line}, this_line = ${this_line}`);
            compare(last_line, this_line, null);
        } else {
            var last_line = `${input[line - 1]} `;
            var this_line = `${text} `;
            var next_line = `${input[line + 1]} `;

            console.log(`Processing line ${line}: last_line = ${last_line}, this_line = ${this_line}, next_line = ${next_line}`);
            compare(last_line, this_line, next_line);
        }
    });

    function compare(last, line, next) {
        var nums = Array.from(line.matchAll(/\d+/g));
        var locs = nums.flatMap(m => Array(m[0].length).fill().map((_, i) => i + m.index));

        console.log(`In compare function: nums = ${nums.map(m => m[0]).join(", ")}, locs = ${locs.join(", ")}`);

        var candidates = Object.fromEntries(nums.map(match => [
            parseFloat(`${match[0]}.${match.index}`),
            locs.filter(index => index >= match.index && index < match.index + match[0].length)
        ]));

        console.log(`Candidates: ${JSON.stringify(candidates)}`);

        for (let candidate in candidates) {
            if (last && test(last.substring(candidates[candidate][0], candidates[candidate][0] + candidates[candidate].length))) {
                sum += Math.floor(candidate);
                console.log(`Updated sum (last): ${sum}`);
                continue;
            }

            if (next && test(next.substring(candidates[candidate][0], candidates[candidate][0] + candidates[candidate].length))) {
                sum += Math.floor(candidate);
                console.log(`Updated sum (next): ${sum}`);
                continue;
            }

            if (test(line.substring(candidates[candidate][0], candidates[candidate][0] + candidates[candidate].length))) {
                sum += Math.floor(candidate);
                console.log(`Updated sum (line): ${sum}`);
                continue;
            }
        }
    }

    function test(s1) {
        return target.test(s1);
    }

    console.log(`Final sum: ${sum}`);
    return sum;
}

function partTwo(input) {
    // Your solution for part two goes here
    return 0;
}

function main() {
    // const input = readInput('input.txt');
    const input = `
    467..114..
    ...*......
    ..35..633.
    ......#...
    617*......
    .....+.58.
    ..592.....
    ......755.
    ...$.*....
    .664.598..
    `.trim().split('\n');
    const processedInput = sharedLogic(input);

    console.log(`Part One: ${partOne(processedInput)}`);
    console.log(`Part Two: ${partTwo(processedInput)}`);
}

main();
