/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxProduct = -Infinity;
    let prefix = 1;
    let suffix = 1;
    const length = nums.length;

    nums.forEach((num, index) => {
        if (prefix === 0) prefix = 1;
        if (suffix === 0) suffix = 1;

        prefix *= num;
        suffix *= nums[length - 1 - index]

        maxProduct = Math.max(maxProduct, prefix, suffix);
    })

    return maxProduct;
};