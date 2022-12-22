// Given an array of integers nums and an integer target, return indices 
//of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.

// You can return the answer in any order.

//     Example 1:

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            const total = nums[i] + nums[j]
            if (total === target) {
                return [j, i]
            }
        }
    }
}

console.log(twoSum([2, 3, 4, 5, 6], 7))

//optimized
function twoSum(nums, target) {
    const res = {};
    for (let i = 0; i < nums.length; i++) {
        if (res[target - nums[i]] >= 0) {
            return [res[target - nums[i]], i]
        }
        res[nums[i]] = i
    }
}

console.log(twoSum([2, 3, 4, 5, 6], 7))