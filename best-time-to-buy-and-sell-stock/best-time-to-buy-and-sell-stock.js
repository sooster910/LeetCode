/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPrice=0;
    let buyPrice = prices[0];
    
    for (let i=1; i<prices.length;i++){
        if (prices[i]<buyPrice){
            buyPrice=prices[i];
        }else if(prices[i] - buyPrice >maxPrice){
            maxPrice = prices[i] - buyPrice;
            
        }
    }
    return maxPrice;
};