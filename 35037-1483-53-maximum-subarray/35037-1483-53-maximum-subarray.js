/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let sum = 0;
    let max = -Infinity;

    nums.forEach((num, index) => {
        sum += nums[index];

        max = Math.max(max, sum);

        if (sum < 0) sum = 0;
    });

    return max;
};