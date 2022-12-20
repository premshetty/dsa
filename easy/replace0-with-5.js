// Input: 102
// Output: 152
// Explanation: All the digits which are '0' is replaced by '5'

// Input: 1020
// Output: 1525
// Explanation: All the digits which are '0' is replaced by '5'


function replace0with3(nums) {
    let numtostring = nums + '';
    let replacednum = [];
    for (let i = 0; i < numtostring.length; i++) {
        if (numtostring[i] === '0') {
            replacednum[i] = '5';
        } else {
            replacednum[i] = numtostring[i];
        }
    }
    const result = Number(replacednum.join(''));
    return result;
}

console.log(replace0with3(10007800020));
