/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  const letterCounter = {};
  
  for(const letter of s) {
      if (letterCounter[letter]) {
          letterCounter[letter]++;
      } else {
          letterCounter[letter] = 1;        
      }
  }
  console.log(letterCounter);
  
  for(var i = 0; i < s.length; i++) {
      const stringletter = s[i];
      if (letterCounter[stringletter] === 1) {
          return i;
      }
  }
  
  return -1;
  
};