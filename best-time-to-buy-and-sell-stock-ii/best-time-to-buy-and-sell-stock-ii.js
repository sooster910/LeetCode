/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
  
    // next주식이 현재 값보다 크면 산다. 
    for(let i=0;i<prices.length-1;i++){
        if(prices[i+1]- prices[i] > 0){
            profit+= (prices[i+1] - prices[i])
        } 
    }
    return profit;
    
};