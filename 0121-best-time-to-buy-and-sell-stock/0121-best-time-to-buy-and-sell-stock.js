/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = Infinity;
    let sell = 0;
    let profit = 0;

    prices.forEach(price => {
        if (price < buy) {
            buy = price;
            sell = 0;
        }

        sell = price > buy ? price : sell;

        if (sell > 0) profit = (sell - buy > profit) ? sell - buy : profit;

    });

    return profit;
};
