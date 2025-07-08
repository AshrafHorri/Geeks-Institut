const sentence = "The movie is not that bad, I like it";

const wordNot = sentence.indexOf("not");
const wordBad = sentence.indexOf("bad");

if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
    const newSentence = sentence.substring(0, wordNot) + "good" + sentence.substring(wordBad + 3);
    console.log(newSentence);
} else {
    console.log(sentence);
}