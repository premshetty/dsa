function palindromeChecker(string) {
    let newstringarray = [];
    for (let i = string.length - 1; i >= 0; i--) {
        newstringarray.push(string[i]);
    }
    const newstring = newstringarray.join('').toString();
    newstring === string ? console.log('palindrome') : console.log('Not a palindrome');
}

palindromeChecker('racecar');
