function convertToRoman(num) {
  const obj = {
    0: ['M', 1000], 
    1: ['D', 500], 
    2: ['C', 100], 
    3: ['L', 50], 
    4: ['X', 10], 
    5: ['V', 5], 
    6: ['I', 1]
  };

  let result = '';

  for (let i = 0; i <= 6; i++) {
    let [roman, value] = obj[i];

    // handle 4s (like IV, XL, CD)
    if (i % 2 === 0 && num >= value - obj[i + 2]?.[1]) {
      result += obj[i + 2][0] + roman;
      num -= value - obj[i + 2][1];
    }

    // handle 9s (like IX, XC, CM)
    if (i % 2 === 0 && num >= value - obj[i + 1]?.[1] && i < 6) {
      result += obj[i + 2][0] + roman; 
      num -= value - obj[i + 2][1];
    }

    // append as many as possible
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }

  return result;
}

console.log(convertToRoman(36)); // XXXVI
console.log(convertToRoman(944)); // CMXLIV
