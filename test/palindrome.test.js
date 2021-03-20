const { isPalindrome } = require('../isPalindrome');

const expect = require('chai').expect;

describe(`palindrome test suite`, () => {
  describe(`palindrome canary spec`, () => {
    it(`shows infrastructure works`, () => {
      expect(true).to.be.true;
    });
  });

  describe(`palindrome function tests if string is a palindrome`, () => {
    it('true for mom', () => {
      expect(isPalindrome('mom')).to.be.true;
    });
    it('false for dude', () => {
      expect(isPalindrome('dude')).to.be.false;
    });
    it('true for mom mom');
    it('false for dad mom');
    it('true for whitespace');
    it('error for empty string');
    it('error for not a string');
  });
});
