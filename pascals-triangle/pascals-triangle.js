/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  
    //numrows= 1
    
    if(numRows===1)return Array.from({length:1},()=>[1]);
    
    const answer = [ [1],[1,1]]
    let prevList;
    for(let i=2; i<numRows;i++){
        let arr = Array.from({length:i+1},()=>1);
        for(let j=0; j< i;j++){
            if (j!==0 && j !== arr.length-1 ){
                prevList =answer[i-1];
                arr[j] = prevList[j-1]+prevList[j-1+1];
            }
        }
        
        answer.push(arr);
    }
    
    return answer
};