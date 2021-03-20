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
    it('false for dad mom', () => {
      expect(isPalindrome('dad mom')).to.be.false;
    });
    it('true for whitespace', () => {
      expect(isPalindrome('   ')).to.be.false;
    });
    it('error for empty string', () => {
      expect(function() {
        isPalindrome('');
      }).to.throw('empty strings are not palindromes');
    });
    it('error for not a string', () => {
      expect(() => {
        isPalindrome(121);
      }).to.throw('input must be a string');
    });
  });
});
