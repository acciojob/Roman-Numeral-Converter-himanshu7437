function convertToRoman(num) {
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

    let roman = '';

    for (let i = 0; i < obj.length; i++) {
        const [letter, value] = obj[i];
        while (num >= value) {
            roman += letter;
            num -= value;
        }
    }

    return roman;
}

// Test it
console.log(convertToRoman(36)); // Output: XXXVI
