const details = {
  my: 'Achraf',
  is: 'Rudolf',
  the: 'reindeer'
};

let sentenceParts = [];
for (const key in details) {
    sentenceParts.push(key);
    sentenceParts.push(details[key]);
}

console.log(sentenceParts.join(' '));