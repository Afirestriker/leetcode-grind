/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = nums.slice().fill(1);
    let left = 1;
    let right = 1;

    nums.forEach((num, index) => {
        const revIndex = nums.length - (index + 1);

        output[index] = output[index] * left;
        left = left * nums[index];

        output[revIndex] = output[revIndex] * right;
        right = right * nums[revIndex];
    });

    return output;
};