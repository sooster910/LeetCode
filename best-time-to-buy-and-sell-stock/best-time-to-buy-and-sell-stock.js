/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   
    let min = prices[0], max = 0;
    
    for(let i = 1; i < prices.length; i++){
        max = Math.max(prices[i] - min, max);
        min = Math.min(prices[i], min);
    }
    
    return max;

};