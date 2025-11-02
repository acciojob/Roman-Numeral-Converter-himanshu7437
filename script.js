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

  while (num > 0) {
    if (num >= 1000) {
      result += obj[0][0];
      num -= 1000;
    } else if (num >= 900) {
      result += obj[2][0] + obj[0][0]; // CM
      num -= 900;
    } else if (num >= 500) {
      result += obj[1][0];
      num -= 500;
    } else if (num >= 400) {
      result += obj[2][0] + obj[1][0]; // CD
      num -= 400;
    } else if (num >= 100) {
      result += obj[2][0];
      num -= 100;
    } else if (num >= 90) {
      result += obj[4][0] + obj[2][0]; // XC
      num -= 90;
    } else if (num >= 50) {
      result += obj[3][0];
      num -= 50;
    } else if (num >= 40) {
      result += obj[4][0] + obj[3][0]; // XL
      num -= 40;
    } else if (num >= 10) {
      result += obj[4][0];
      num -= 10;
    } else if (num >= 9) {
      result += obj[6][0] + obj[4][0]; // IX
      num -= 9;
    } else if (num >= 5) {
      result += obj[5][0];
      num -= 5;
    } else if (num >= 4) {
      result += obj[6][0] + obj[5][0]; // IV
      num -= 4;
    } else {
      result += obj[6][0];
      num -= 1;
    }
  }

  return result;
}

// Test cases
console.log(convertToRoman(36));   // XXXVI
console.log(convertToRoman(944));  // CMXLIV
console.log(convertToRoman(4));    // IV
console.log(convertToRoman(9));    // IX
console.log(convertToRoman(58));   // LVIII
