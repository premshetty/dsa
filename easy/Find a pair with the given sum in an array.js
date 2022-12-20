//Given an unsorted integer array, find a pair with the given sum in it.


// Input:

// nums = [8, 7, 2, 5, 3, 1]
// target = 10

// Output:

// Pair found(8, 2)
// or
// Pair found(7, 3)


// Input:

// nums = [5, 2, 6, 8, 1, 9]
// target = 12

// Output: Pair not found


const pairFinder = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        const expectednum = 10 - nums[i];
        if (nums.includes(expectednum)) {
            return `pair found (${nums[i], expectednum})`
        }
    }
}

console.log(pairFinder([8, 7, 2, 5, 3, 1]))