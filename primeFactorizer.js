const primeFactorizer = number => {
  let arr = [];
  if (number > 1) {
    if (number % 2 === 0) {
      arr.push(2);
      number /= 2;
    }
    if (number > 1) arr.push(number);
  }
  return arr;
};

module.exports = { primeFactorizer };
