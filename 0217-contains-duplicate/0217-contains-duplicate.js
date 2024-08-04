/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const duplicateCheck = new Set();

    for (const num of nums) {
        if (!duplicateCheck.has(num)) {
            duplicateCheck.add(num)
            continue;
        }

        return true;
    }

    return false;
};
