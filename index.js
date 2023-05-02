function isPalindrome(word) {
  // Write your algorithm here
  const splitWord = word.split('');
  const reverseWord = splitWord.reverse();
  const joinWord = reverseWord.join('');
  
  return joinWord === word ? true : false;
}

/* 
  Add your pseudocode here

  1) reverse the input word/string
  2) if the reversed word/string is the same as the input, return true
  3) else return false 

*/

/*
  Add written explanation of your solution here

  1) I first split the input word/string with the split() method in order to get an array of substrings
  2) I then reversed the subtrings in the array with the reverse() method
  3) I followed by joining the substrings with the join() method to get the input in reversed
  4) Lastly I compared the input with the reversed input I created, if it deeply equals the same 
  I returned true, if not then returned false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
