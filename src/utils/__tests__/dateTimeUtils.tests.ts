import { minutesToHMText } from '../dateTimeUtils';
import { describe, expect } from '@jest/globals';

describe('DateTime utils', () => {
  describe('minutesToHMText', () => {
    it('should contain h', () => {
      const result = minutesToHMText(100);

      expect(result.indexOf('h')).toBeGreaterThan(-1);
    });

    it('should contain m', () => {
      const result = minutesToHMText(100);

      expect(result.indexOf('m')).toBeGreaterThan(-1);
    });

    const cases = [
      { total: 59, expected: '0h 59m' },
      { total: 60, expected: '1h 0m' },
      { total: 61, expected: '1h 1m' },
      { total: 1, expected: '0h 1m' },
      { total: 239, expected: '3h 59m' },
    ];

    it.each(cases)(
      'should returns $expected if given $total',
      ({ total, expected }) => {
        const result = minutesToHMText(total);

        expect(result).toEqual(expected);
      }
    );
  });
});
