/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.every(isAllSameValue)) return 1
    let max =0;
    const dp = Array.from({length:nums.length}, ()=>1)
    let lic = 0;
    for(let i =1; i<nums.length; i++){
        for(let j =0; j<i; j++){
            if(nums[j]<nums[i]){
                max = dp[j] +1
                if(dp[i]<max){
                  dp[i] = max;
                  max = 0;
                } 
            }
        }
        lic = lic>dp[i] ? lic :dp[i]
    }
    
    return lic 
    
    
};

const isAllSameValue = (v,i,arr)=> v === arr[0]