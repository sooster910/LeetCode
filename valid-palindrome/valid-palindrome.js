/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
     if (typeof(s) !=="string") return false;
   
    const regex = /[^a-zA-Z0-9]/g
    s = s.replace(regex, "").toLowerCase();
    console.log("s",s.length)
      if(!s) return true;
      if(s.length==1) return true;
  for (let i = 0; i <= parseInt(s.length / 2); i++){
     if(s[i] !== s[s.length-i-1]) return false
  }
  return true;
};