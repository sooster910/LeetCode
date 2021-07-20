/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    //get left wall value
   let answer=0;
   //1. 현재 인덱스의 왼쪽부터 차례로 확인하면서, 현재 인덱스의 높이와 현재 인덱스 전까지 가장 높은 높이를 비교한다. 
   
   
   const left =[0]; //인덱스가 0일 때 왼쪽 인덱스(-1)의 값 = 0으로 처리 
   for(let i =1; i<height.length; i++ ){
       left.push(Math.max(left[i-1], height[i-1]));
       
   }
   const right = Array.from({length:height.length},()=>0);
  
   //2. right 처리 끝에서 부터 시작 
   for(let i =height.length-2; i>=0; i-- ){
        right[i] = Math.max(right[i+1], height[i+1]);
    
    }
   //iterate하면서 만약 
   for (let i=0; i<height.length;i++){
       if(height[i] >= left[i] || height[i] >= right[i]) continue;
       answer+=Math.min(left[i], right[i])-height[i] 
   }
   
   return answer
};