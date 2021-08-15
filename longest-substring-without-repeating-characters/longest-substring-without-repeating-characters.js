/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let str= s;
     const set = new Set();  
    let max = 0; // max length of substring
    let length = 0; // length of set
    let start = 0;
    
    for(let end = 0; end<str.length; end++){
        //iterate하면서 set에 추가한다 
        //조건1. 만약 추가하려는 문자가 set에 있다면?
      
        // 그리고 기존의 set에서 중복되는 문자를 지우면 substring의 기준에 위배 되는가?
        // 위배된다면, 아예 set을 지우고  새로 시작 
        
        if(set.has(str[end])){
           while(str[start]!==str[end]){
               set.delete(str[start++]);
           }
            set.delete(str[start++]);
            
        }
        
        
        //그리고 현재 문자를 set에 추가 해야함 . 
        set.add(str[end]);

        //set length 구하기
        length = set.size
        // set length들 중에 max값 update 하기 
        max = Math.max(max, length)
        //조건2. 만약 추가하려는 문자가 set에 있다면?
        //그리고 기존의 set에서 중복되는 문자를 지우면 substring의 기준에 위배 되는가?
        //위배가 안된다면, set에서 중복되는 문자를 지운다. 

       

    }
    console.log(max)
    return max
};