function isPalindrome(val) {
    const revered = val.split("").reverse().join("")
    return val === revered
}

//162 ms memory comnsuptions sucks though