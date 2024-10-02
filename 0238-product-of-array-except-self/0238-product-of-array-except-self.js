/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const output = nums.slice().fill(1);
    let prefix = 1;
    let suffix = 1;
 
    nums.forEach((num, index) => {
        const revIndex = nums.length - (index + 1);

        output[index] *= prefix;
        prefix *= nums[index];

        output[revIndex] *= suffix;
        suffix *= nums[revIndex];
    });

    return output;
};