/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const duplicateKey = {};

    for (let i = 0; i < nums.length; i++) {
        if (!duplicateKey[nums[i]])
            duplicateKey[nums[i]] = 1;
        else 
            return true;
    }

    return false;
};