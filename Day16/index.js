        const fs = require('fs');

        function readInput(fileName) {
            return fs.readFileSync(fileName, 'utf-8').trim().split('\n');
        }

        function partOne(input) {
            // Part one code here
        }

        function partTwo(input) {
            // Part two code here
        }

        function main() {
            const input = readInput('input.txt');
            console.log(`Part One: ${partOne(input)}`);
            console.log(`Part Two: ${partTwo(input)}`);
        }

        main();
