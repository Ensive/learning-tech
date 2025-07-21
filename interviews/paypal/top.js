/*We are working on a word puzzle and need to find the common words in a large text. We are given a CSV input of words along with their frequency count.

Write a function that returns the C most common words and the frequency counts, ordered by their frequency. We only want to return words in length of [2..L].

// input: array of strings,
// output: sorted

counts1 = [
	"POINT,333858",
	"ON,4594521",
	"ONE,2148983",
	"BEHAVIOR,104177",
	"FORM,352032",
	"OF,30966074",
	"TWO,1400645",
	"THREE,1144226",
	"FOUR,679337",
	"OFF,333858",
	"FROM,3469207",
	"NO,6545282",
	"FORMS,136468",
	"A,45916054"
]

# Sample usage with maximum word length 5, to find top 12 words:
# Expected output (in order, pseudodata):
top(counts1, need_words = 12, max_word_length = 5) =>
	OF:    30966074,
	NO:     6545282,
	ON:     4594521,
	FROM:   3469207,
	ONE:    2148983,
	TWO:    1400645,
	THREE:  1144226,
	FOUR:    679337,
	FORM:    352032,
	POINT:   333858,
	OFF:     333858,
	FORMS:   136468

counts2 = [
	"POINT,333858",
	"ONE,2148983",
	"BEHAVIOR,104177",
	"TWO,1400645",
	"THREE,1144226",
	"FOUR,679337"
]

top(counts2, need_words = 1, max_word_length = 3) =>
	ONE:    2148983,

top(counts2, need_words = 3, max_word_length = 3) =>
	ONE:    2148983,
	TWO:    1400645

top(counts2, need_words = 3, max_word_length = 5) =>
	ONE:    2148983,
	TWO:    1400645,
	THREE:	1144226

Reiteration of test cases:

top(counts1, need_words = 12, max_word_length = 5)
top(counts2, need_words = 1, max_word_length = 3)
top(counts2, need_words = 3, max_word_length = 3)
top(counts2, need_words = 3, max_word_length = 5)

Complexity Analysis:

N: Number of lines in the input
C: Number of words in the output*/

"use strict";

const counts1 = [
  "POINT,333858",
  "ON,4594521",
  "ONE,2148983",
  "BEHAVIOR,104177",
  "FORM,352032",
  "OF,30966074",
  "TWO,1400645",
  "THREE,1144226",
  "FOUR,679337",
  "OFF,333858",
  "FROM,3469207",
  "NO,6545282",
  "FORMS,136468",
  "A,45916054",
];

const counts2 = [
  "POINT,333858",
  "ONE,2148983",
  "BEHAVIOR,104177",
  "TWO,1400645",
  "THREE,1144226",
  "FOUR,679337",
];

function getCommonWords(words, needWords, maxWordLength) {
  const wordsCount = {};

  for (let i = 0; i < words.length; i++) {
    const word = words[i].split(",")[0];
    const count = +words[i].split(",")[1];
    if (word.length > 2 && word.length <= maxWordLength) {
      wordsCount[word] = count;
    }
  }

  const sortedWordsCount = Object.entries(wordsCount).sort(
    (a, b) => b[1] - a[1],
  );

  let count = 0;
  let result = [];
  while (count < needWords) {
    const item = sortedWordsCount.pop();
    console.log("item", item);
    result.push(`${item[0]},${item[1]}`);
    count++;
  }

  return result;
}

getCommonWords(counts1, 12, 5);

// debug
// test
// completeness => optimality
// 1, 2, 3
