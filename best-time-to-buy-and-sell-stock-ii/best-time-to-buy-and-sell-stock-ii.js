/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let deltaSum =0;
    for(let i=1; i<prices.length;i++){
        delta = prices[i]-prices[i-1];
        
        if(delta >0 ){
            deltaSum+=delta
        }
        
    }
    
    return deltaSum
};