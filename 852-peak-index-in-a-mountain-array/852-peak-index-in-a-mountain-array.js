/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    //
    let answer =-1;
    let l = 1; r= arr.length-1;
    while(l<=r){
        let mid = parseInt((l+r)/2);
        //최고 지점인지 확인
        if(arr[mid-1] <=arr[mid] && arr[mid+1] <arr[mid]){
            return mid
            
        }else if(arr[mid-1] <arr[mid] && arr[mid+1] >arr[mid]){                 
        // 올라가는 지점
            l= mid+1
            }else if(arr[mid-1]> arr[mid] && arr[mid+1] <arr[mid] ){
        // 내려가는 지점인지
         r=mid-1                
                     }
        
     
    }
    return 0
};




