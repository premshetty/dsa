// The cumulative sum of an array at index i is defined as the sum 
//of all elements of the array from index 0 to index i.

//     Examples
// Initial Array: [1, 2, 3, 4]
// Cumulative Sum: [1, 3, 6, 10]
// Initial Array: [1, 1, 1, 1, 1]
// Cumulative Sum: [1, 2, 3, 4, 5]


// o(n2)
function cummulativeSum(arr) {
    let cummulativearray = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = 0; j < i + 1; j++) {
            sum += arr[j];
        }
        cummulativearray.push(sum);
    }
    return cummulativearray;
}

console.log(cummulativeSum([1, 2, 3, 4, 5, 6]));


//o(n)

function cummulativeSum(arr) {
    let cummulativearray = [];
    let previoustotal = 0;
    for (let i = 0; i < arr.length; i++) {
        const newvalue = previoustotal + arr[i];
        previoustotal = newvalue
        cummulativearray.push(newvalue)
    }
    return cummulativearray;
}

console.log(cummulativeSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));