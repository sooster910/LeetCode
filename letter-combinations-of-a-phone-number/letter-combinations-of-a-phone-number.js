/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const phone = {
  2: "abc",
  3: "def",
  4: "ghi",
  5: "jkl",
  6: "mno",
  7: "pqrs",
  8: "tuv",
  9: "wxyz"
};
       function dfs(index, curStr) {
    if (curStr.length === digits.length) {
      return result.push(curStr.join(""));
    }

    //현재 위치한 자릿수를 기준으로
    for (let i = index; i < digits.length; i++) {
      //
      for (let char of phone[digits[i]]) {
        dfs(i + 1, [...curStr, char]);
      }
    }
  }

  const result = [];
  if (!digits) return [];
  dfs(0, []);
    
    return result
}