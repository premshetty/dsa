function romanToInt(rom) {
    const dict = {
        "I": 1, //can be in front of "V" or "X"
        "V": 5,
        "X": 10, //can be in front of "L" or "C"
        "L": 50,
        "C": 100, //can be in front of "D" or "M"
        "D": 500,
        "M": 1000
    }
    const combintions = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900
    }
    let result = 0;
    for (let i = 0; i < rom.length; i++) {
        const twowords = rom[i] + rom[i + 1]
        if (combintions[twowords]) {
            result += combintions[twowords]
            i++
        } else {
            result += dict[rom[i]]
        }
    }
    return result
}

console.log(romanToInt("LVIII"))