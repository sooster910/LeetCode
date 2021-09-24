/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // num1 이 비었을 경우 
     let k = m+n-1;
        let i= m-1;
        let j= n-1;
    if(m === 0) {
        for (let i =0; i<nums2.length; i++){
            nums1[i] = nums2[i]
        }
      return;  
    } 
    
    //num2가 비었을 경우 
    if(n === 0 ) return nums1;
    
    while(i>=0 && j>=0){
        if(nums1[i] > nums2[j]){
            nums1[k]=nums1[i];
            i--;
            
        }else{
            //같을 땐 nums2
            nums1[k] = nums2[j];
            
            j--;
        }
        k--;
        
    }
    //i 
    //j 또는 i 가 여전히 남아있는 경우 
    // k--하면서 그대로 옮겨준다. 
    // 
    while(j>=0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }
};