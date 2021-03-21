const primeFactorizer = number => {
  let primeFactors = [];
  if (number > 1) {
    while (number % 2 === 0) {
      primeFactors.push(2);
      number /= 2;
    }
    if (number > 1) primeFactors.push(number);
  }
  return primeFactors;
};

module.exports = { primeFactorizer };
