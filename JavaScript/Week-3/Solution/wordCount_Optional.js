// Word Frequency Counter
// Features:
// Takes a block of text input from the user and outputs the frequency of each word.
// Use string methods like split (to break text into words) and indexOf (to tally frequencies).
// Store word counts in an object and convert the object to an array to manipulate and sort by frequency using sort.

function wordFrequencyCounter(text) {
    // Split the text into words
    const words = text.split(/\s+/); 
    const wordCount = {};

    // Count the frequency of each word
    for (const word of words) {
        const cleanedWord = word.toLowerCase().replace(/[.,!?]/g, '');
        if (cleanedWord) {
            if (wordCount[cleanedWord]) {
                wordCount[cleanedWord]++;
            } else {
                wordCount[cleanedWord] = 1;
            }
        }
    }

    // Convert the object to an array of [word, frequency] pairs
    const wordArray = Object.entries(wordCount);

    // Sort the array by frequency in descending order
    wordArray.sort((a, b) => b[1] - a[1]);

    return wordArray;
}

// Example usage
const text = "Hello world! Hello everyone. This is a test. Hello world!";
const frequency = wordFrequencyCounter(text);
console.log("Word Frequency:", frequency);

// Output: Word Frequency: [ [ 'hello', 3 ], [ 'world', 2 ], [ 'everyone', 1 ], [ 'this', 1 ], [ 'is', 1 ], [ 'a', 1 ], [ 'test', 1 ] ]