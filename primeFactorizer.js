const primeFactorizer = number => {
  let primeFactors = [];
  let divisor = 2;
  if (number > 1) {
    while (divisor <= number / 2) {
      while (number % divisor === 0) {
        primeFactors.push(divisor);
        number /= divisor;
      }
      divisor += 1;
    }

    if (number > 1) {
      primeFactors.push(number);
    }
  }
  return primeFactors;
};

module.exports = { primeFactorizer };
