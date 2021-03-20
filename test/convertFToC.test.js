const { convertFToC } = require('../convertFToC');

const expect = require('chai').expect;
const assert = require('chai').assert;
const should = require('chai').should;

describe(`fahrenheit to celsius converter tests`, () => {
  describe(`canary spec`, () => {
    it(`shows the infrastructure works`, () => {
      expect(true).to.be.true;
    });
  });
  describe('fahrenheit to celsius converter behaves as follows', () => {
    it('212 degrees fahrenheit is 100 degrees celsius', () => {
      expect(convertFToC(212)).to.equal(100);
    });

    it('32 degrees fahrenheit is 0 degrees celsius', () => {
      expect(convertFToC(32)).to.equal(0);
    });

    it('50 degrees fahrenheit is 10 degrees celsius', () => {
      expect(convertFToC(50)).to.equal(10);
    });

    it('-22 degrees fahrenheit is -30 degrees celsius', () => {
      expect(convertFToC(-22)).to.equal(-30);
    });
  });
});