import { isBigInt } from '../src';
import { primitives } from './mocks';

describe('bigint', () => {
  const nonBigIntPrimitives = Object.entries(primitives)
    .filter(([key]) => key !== 'bigint')
    .map(([_, primitive]) => primitive);

  describe('isBigInt()', () => {
    describe('when given a bigint primitive', () => {
      it('should return true', () => {
        expect(isBigInt(primitives.bigint)).toBe(true);
      });
    });

    describe('when given a bigint via primitive wrapper', () => {
      it('should return true', () => {
        expect(isBigInt(BigInt('9007199254740991'))).toBe(true);
      });
    });

    describe('when given non bigint primitives', () => {
      it('should return false', () => {
        nonBigIntPrimitives.forEach((x) => expect(isBigInt(x)).toBe(false));
      });
    });
  });
});
