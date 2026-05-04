class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let p = 0
        for (let i=1; i<prices.length; i++ ) {
            let currentSum = prices[i] - prices[p]
            if( currentSum < 0 ) {
                p = i
            }
            if( currentSum > maxProfit ) {
                maxProfit = currentSum
            }
        }
        return maxProfit
    }
}
