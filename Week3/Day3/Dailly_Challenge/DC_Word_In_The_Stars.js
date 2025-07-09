const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter several words separated by commas: ', (input) => {
    const words = input.split(',').map(w => w.trim());
    const maxLen = Math.max(...words.map(w => w.length));
    const border = '*'.repeat(maxLen + 4);
    console.log(border);
    for (let word of words) {
        console.log(`* ${word.padEnd(maxLen, ' ')} *`);
    }
    console.log(border);
    rl.close();
});
