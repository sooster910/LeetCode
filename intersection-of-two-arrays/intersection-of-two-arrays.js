/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let answer =[];
    if (nums1.length<nums2.length){
        for (let i =0; i<nums1.length; i++){
           if(nums2.includes(nums1[i])){
               answer.push(nums1[i])
           }
        }
    }else{
          for (let i =0; i<nums2.length; i++){
           if(nums1.includes(nums2[i])){
               answer.push(nums2[i])
           }
          }
    }
   let noduplicated_answer= new Set(answer);
    
   return [...noduplicated_answer]
};