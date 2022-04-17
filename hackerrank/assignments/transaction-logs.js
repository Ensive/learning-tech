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
 * Complete the 'processLogs' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts following parameters:
 *  1. STRING_ARRAY logs
 *  2. INTEGER threshold
 */

function processLogs(logs, threshold) {
    const result = [];
    // build an array/hash? of people with amount of transactions in asc order
    const usersWithTransactions = {};
    
    if (logs.length === 1 && threshold === 1) {
        if (logs[0].split(' ')[0] === logs[0].split(' ')[1]) {
            return [logs[0].split(' ')[0]];
        } else {
            if (logs[0].split(' ')[0] > logs[0].split(' ')[1]) {
                return [logs[0].split(' ')[1], logs[0].split(' ')[0]];
            } else {
                return [logs[0].split(' ')[0], logs[0].split(' ')[1]];
            }   
        }
    }

    const transactionsCount = logs.length;
    for (let i = 0; i < transactionsCount; i++) {
        const [senderUserId, recipientUserId] = logs[i].split(' ');
        
        // sender = recipient
        if (senderUserId === recipientUserId) {
            if (usersWithTransactions[senderUserId]) {
                usersWithTransactions[senderUserId] += 1;
                // with === - no duplications
                if (usersWithTransactions[senderUserId] === threshold) {
                    result.push(senderUserId);
                }
            } else {
                usersWithTransactions[senderUserId] = 1;
            }
            
            continue;
        }

        if (usersWithTransactions[senderUserId]) {
            usersWithTransactions[senderUserId] += 1;
            if (usersWithTransactions[senderUserId] === threshold) {
                result.push(senderUserId); // remove duplications afterwards ?
                
                // new entry (first) // duplications are ok,
                // how to update existing number - no need
                // how to sort by id // sort at the end is ok
            }
            
        } else {
            usersWithTransactions[senderUserId] = 1;
        }
        
        if (usersWithTransactions[recipientUserId]) {
            usersWithTransactions[recipientUserId] += 1;
            if (usersWithTransactions[recipientUserId] === threshold) {
                result.push(recipientUserId);
            }
        } else {
            usersWithTransactions[recipientUserId] = 1;
        }
    }
    
    // sort it ?
    // iterating through object vs iterating through array?
    
    result.sort((a, b) => a - b);
    
    // do we need sorting in the beginning
    // do we need to form new data structure?
    // search through array of strings
    // result sorted in asc from down ^ up
    
    console.log(result);
    console.log('logs', logs);
    console.log('threshold', threshold);
    return result;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const logsCount = parseInt(readLine().trim(), 10);

    let logs = [];

    for (let i = 0; i < logsCount; i++) {
        const logsItem = readLine();
        logs.push(logsItem);
    }

    const threshold = parseInt(readLine().trim(), 10);

    const result = processLogs(logs, threshold);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
