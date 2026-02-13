/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let freq = {};
  const n = str1.length;
  for(let ch of str1){
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for(let ch of str2){
    if(!freq[ch]) return false;
  }
  return true;
}

module.exports = isAnagram;
