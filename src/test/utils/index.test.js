
import {
  calculateMean,
  calculateMedian,
  calculateMode,
} from '../../utils'; 

describe('Math Functions', () => {
  describe('calculateMean', () => {
    test('calculates mean of an array of numbers', () => {
      const values = [1, 2, 3, 4, 5];
      expect(calculateMean(values)).toBe(3);
    });

    test('handles an empty array', () => {
      const values = [];
      expect(calculateMean(values)).toBe(NaN);
    });
  });

  describe('calculateMedian', () => {
    test('calculates median of an odd-sized array', () => {
      const values = [1, 2, 3, 4, 5];
      expect(calculateMedian(values)).toBe(3);
    });

    test('calculates median of an even-sized array', () => {
      const values = [1, 2, 3, 4, 5, 6];
      expect(calculateMedian(values)).toBe(3.5);
    });

    test('handles an empty array', () => {
      const values = [];
      expect(calculateMedian(values)).toBe(NaN);
    });
  });

  describe('calculateMode', () => {
    test('calculates mode of an array with a unique mode', () => {
      const values = [1, 2, 2, 3, 4, 5];
      expect(calculateMode(values)).toBe(2);
    });

    test('calculates mode of an array with multiple modes', () => {
      const values = [1, 2, 2, 3, 3, 4, 5];
      expect(calculateMode(values)).toBe(2);
    });

    test('handles an empty array', () => {
      const values = [];
      expect(calculateMode(values)).toBe(null);
    });
  });
});
