/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = new Map();
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        const find = target - nums[i];

        if (numMap.has(find)) {
            ans = [numMap.get(find), i];
            break;
        } else {
            numMap.set(nums[i], i);
        }
    }

    return ans;
};
