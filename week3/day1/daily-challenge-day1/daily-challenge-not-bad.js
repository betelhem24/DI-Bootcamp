// Daily challenge: Not Bad

// 1. Create sentence
let sentence = "The movie is not that bad, I like it"; 

// 2. Find position of "not"
let wordNot = sentence.indexOf("not"); 

// 3. Find position of "bad"
let wordBad = sentence.indexOf("bad"); 

// 4. Replace "not...bad" with "good" if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(newSentence);
} else {
  console.log(sentence);
}