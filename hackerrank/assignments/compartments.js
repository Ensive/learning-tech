'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'numberOfItems' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER_ARRAY startIndices
 *  3. INTEGER_ARRAY endIndices
 */

function numberOfItems(s, startIndices, endIndices) {
    // Write your code here
    // startIndex = startIndex - 1
    // endIndex = endIndex - 1
    
    // we count only closed compartments
    // we count the items in close compartments only
    // string can stary wherever
    
    // step 1: declare result, [] of integers of items in closed compartments for each pair of indicies
    // step 2: we do loop inside loop through n squared (quadratic time)
    // step 3: open a loop through indicies
    // step 4: loop through string starting and ending at the indicies
    // step 5: while looping through we check on closed compartments and count items in each closed compartment
    // step 6: at the end we push the items count to result array
    
    var result = [];
    let startCounting = false;
    for (let i = 0; i < startIndices.length; i++) {
        let itemsCount = 0;
        let pipes = 0;
        for (let k = startIndices[i] - 1; k < endIndices[i]; k++) {
            if (startCounting === false) {
                if (s[k] === '|') {
                    startCounting = true;
                    pipes++;
                    continue;
                } else {
                    continue;
                }
            }
            
            if (startCounting) {
                if (s[k] === '*') {
                    itemsCount++;
                    continue;
                } else {
                    pipes++;
                }
            }
            
            if (k === endIndices[i] - 1 && pipes > 1) {
                result.push(itemsCount);
                pipes = 0;
                startCounting = false;
                itemsCount = 0;
            }
        }
    }
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const startIndicesCount = parseInt(readLine().trim(), 10);

    let startIndices = [];

    for (let i = 0; i < startIndicesCount; i++) {
        const startIndicesItem = parseInt(readLine().trim(), 10);
        startIndices.push(startIndicesItem);
    }

    const endIndicesCount = parseInt(readLine().trim(), 10);

    let endIndices = [];

    for (let i = 0; i < endIndicesCount; i++) {
        const endIndicesItem = parseInt(readLine().trim(), 10);
        endIndices.push(endIndicesItem);
    }

    const result = numberOfItems(s, startIndices, endIndices);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
