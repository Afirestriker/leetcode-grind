/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    arr.forEach(num => {
        if (num <= k) ++k;
        else return;
    });

    return k;
};