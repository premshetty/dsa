// Given a binary array, sort it in linear time and constant space.
// The output should print all zeroes, followed by all ones.

// For example,

//     Input: { 1, 0, 1, 0, 1, 0, 0, 1 }

// Output: { 0, 0, 0, 0, 1, 1, 1, 1 }

function sortbinary(nums) {
    const zeros = []
    const ones = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            zeros.push(nums[i])
        } else {
            ones.push(nums[i])
        }
    }
    return [...zeros, ...ones]
}

sortbinary([1, 0, 2, 0, 3, 0, 0, 1])