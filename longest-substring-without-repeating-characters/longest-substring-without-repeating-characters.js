/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
        if(s.length <=1) return s.length;

    //create set in order to detect repeating
    const set = new Set();

    // loop from first string
    let longest = 0;
   

    for(let left = 0; left<s.length;left++){
         let right = left;
        
        while(right < s.length){
            //set에 중복되어 있는지 확인
            //만약 없다면, 
            if(!set.has(s[right]) ){
                     // set에 추가하기
                     set.add(s[right]);
                      // 그리고 right ++ 하기 
             right++;
            }else{
                   //만약 있다면, 

            //set.size와 longest와 비교하여서 더 큰수를 longest에 지정하기 
                longest= set.size >longest ? set.size: longest;
            //현재 있던 set모두 지우기 
                set.clear();
            //현재 observe 하고 있는 요소만 추가하기 
                // set.add(s[right]);
            // right를 0으로 리셋하기 
            // right = 0;
            // //break하기 
            break;
            }
         
        }
    }

    return longest;
};