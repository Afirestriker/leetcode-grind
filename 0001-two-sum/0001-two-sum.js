/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const answer = [];

    loop1:
    for (let n = 0; n < nums.length; n++) {
        answer[0] = n;

        const toFind = target - nums[n];

        loop2:
        for (let i = n + 1; i < nums.length; i++) {
            if (nums[i] === toFind) {
                answer[1] = i;
                break loop1;
            }
        }
    }

    return answer;
};
