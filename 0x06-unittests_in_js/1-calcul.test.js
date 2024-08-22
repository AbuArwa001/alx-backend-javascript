const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('sUM', () => {
    it('should return the sum of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
      assert.strictEqual(calculateNumber('SUM', -1.2, -3.7), -5);
    });
  });

  describe('sUBTRACT', () => {
    it('should return the difference of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.6, 3.2), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 1.8, 0.4), 2);
      assert.strictEqual(calculateNumber('SUBTRACT', -2.8, -1.3), -2);
    });
  });

  describe('dIVIDE', () => {
    it('should return the division of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 8.4, 2.2), 4);
      assert.strictEqual(calculateNumber('DIVIDE', 7.6, 2.5), 3);
      assert.strictEqual(calculateNumber('DIVIDE', -6.7, 2.4), -3);
    });

    it('should return "Error" if dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 4.2, 0), 'Error');
    });
  });
});
