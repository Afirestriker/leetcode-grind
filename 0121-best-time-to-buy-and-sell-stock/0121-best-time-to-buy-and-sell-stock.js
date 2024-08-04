/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let profit = 0;

    prices.forEach(price => {
        const cost = price - min;
        profit = Math.max(cost, profit);
        min = Math.min(price, min);
    });

    return profit;
};
