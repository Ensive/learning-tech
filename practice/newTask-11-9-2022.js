// input is a string
//
// output: a list of anagrams

// "string"

// "gstrin", "trings", ""
// 5!

// "string"
// "tsring"
// "rtsing"
// "itrsng"
// "ntrisg"
// "gtrins"
// "ntrigs"

// "s" + "tring"
// "s" + "grint"
// "s"

// iterate over string
// inner loop: place current char at every position
//

function getAnagrams(string) {
  const result = [];

  if (string.length === 0) {
    return [];
  }

  // console.log('string :>> ', string);

  for (let i = 0; i < string.length; i++) {
    const firstRemainder = string.slice(0, i);
    const secondRemainder = string.slice(i);

    // console.log('firstRemainder :>> ', firstRemainder);
    // console.log('secondRemainder :>> ', secondRemainder);
    const anagrams = getAnagrams(secondRemainder);
    console.log('anagrams :>> ', anagrams);
    for (let j = 0; j < anagrams.length; j++) {
      result.push(firstRemainder + anagrams[j]);
      console.log('anagrams[j] :>> ', anagrams[j]);
    }
  }

  return result;
}

console.log(getAnagrams('string'));
