let vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function isVowel(sentence) {
  let count = 0;
  const letter = Array.from(sentence);
  letter.forEach(function (value) {
    if (vowel.includes(value)) {
      count++;
    }
  });
  return count;
}

console.log(isVowel("I Love My Country Bangladesh"));
