function convertToRoman(num) {
    // List of Roman numerals and their corresponding values
    const obj = [
        ['M', 1000], 
        ['CM', 900], 
        ['D', 500], 
        ['CD', 400], 
        ['C', 100], 
        ['XC', 90], 
        ['L', 50], 
        ['XL', 40], 
        ['X', 10], 
        ['IX', 9], 
        ['V', 5], 
        ['IV', 4], 
        ['I', 1]
    ];

    let result = '';

    // Loop through the Roman numerals array
    for (let i = 0; i < obj.length; i++) {
        const symbol = obj[i][0];
        const value = obj[i][1];

        // While num is greater than or equal to the value, append the symbol to result
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Test the function with input 36
console.log(convertToRoman(36)); // Output: XXXVI
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII

// do not edit below this line
module.exports = convertToRoman;
