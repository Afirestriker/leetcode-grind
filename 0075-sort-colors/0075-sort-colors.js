/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const colorCount = {0: 0, 1: 0, 2: 0};

    for (const item of nums) colorCount[item]++;

    let indx = 0;

    for (const colorKey of Object.keys(colorCount)) {
        for (let j = 0; j < colorCount[colorKey]; j++) {
            nums[indx] = colorKey;
            indx++;
        }
    }
};
