const { primeFactorizer } = require('../primeFactorizer');
const expect = require('chai').expect;

describe.only(`isPrime test suite`, () => {
  describe(`isPrime canary spec`, () => {
    it('shows the infrastructure works', () => {
      expect(true).to.be.true;
    });
  });
  describe(`primeFactorizer correctly outputs all prime factors`, () => {
    it('for 1 return []', () => {
      expect(primeFactorizer(1)).to.deep.equal([]);
    });
    it('for 2 return [2]', () => {
      expect(primeFactorizer(2)).to.deep.equal([2]);
    });
    it('for 4 return [2,2]');
  });
});
