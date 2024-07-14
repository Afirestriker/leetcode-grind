/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    const arrayMap = new Map();
    const missingNumbers = [];
    let missNum = 1;

    arr.forEach(val => {
        arrayMap.set(val, val);
    });

    while (k > 0) {
        if (!arrayMap.has(missNum)) {
            missingNumbers.push(missNum);
            k--;
        }

        missNum++;
    }

    return missingNumbers[missingNumbers.length - 1];
};