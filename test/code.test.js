const { convertFToC } = require('../code');

var expect = require('chai').expect;
var assert = require('chai').assert;
var should = require('chai').should;

describe.only(`fahrenheit to celsius converter tests`, () => {
  describe(`canary spec`, () => {
    it(`shows the infrastructure works`, () => {
      expect(true).to.be.true;
    });
  });
  describe('fahrenheit to celsius converter behaves as follows', () => {
    it('212 degrees fahrenheit is 100 degrees celsius', () => {
      expect(convertFToC(212)).to.equal(100);
    });

    it('32 degrees fahrenheit is 0 degrees celsius');
    it('50 degrees fahrenheit is 10 degrees celsius');
  });
});
