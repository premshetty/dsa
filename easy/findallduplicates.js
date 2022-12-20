// Input: [ 1, 2, 3, 4, 4 ]
// Output: The duplicate element is {4}


// Input: [ 1, 2, 3, 4, 2 , 4 ]
// Output: The duplicate element is {2, 4}

const findAllDuplicates = (nums) => {
    let count = {}
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]] >= 1) {
            count[nums[i]] += 1
            result.push(nums[i])
        } else {
            count[nums[i]] = 1
        }
    }
    return [...new Set(result)]
}

findAllDuplicates([1, 2, 3, 4, 2, 4, 4, 4, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7])