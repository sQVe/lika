import { isNumber, isNumberLike, isNumberObject } from '../src';
import { primitives } from './mocks';

describe('number', () => {
  const nonNumberPrimitives = Object.entries(primitives)
    .filter(([key]) => key !== 'number')
    .map(([_, primitive]) => primitive);

  describe('isNumber()', () => {
    describe('when given a number primitive', () => {
      it('should return true', () => {
        expect(isNumber(primitives.number)).toBe(true);
      });
    });

    describe('when given a number object', () => {
      it('should return false', () => {
        // eslint-disable-next-line no-new-wrappers
        expect(isNumber(new Number('123'))).toBe(false);
      });
    });

    describe('when given non number primitives', () => {
      it('should return false', () => {
        nonNumberPrimitives.forEach((x) => expect(isNumber(x)).toBe(false));
      });
    });
  });

  describe('isNumberObject()', () => {
    describe('when given a number primitive', () => {
      it('should return false', () => {
        expect(isNumberObject(primitives.number)).toBe(false);
      });
    });

    describe('when given a number object', () => {
      it('should return true', () => {
        // eslint-disable-next-line no-new-wrappers
        expect(isNumberObject(new Number('123'))).toBe(true);
      });
    });

    describe('when given non number primitives', () => {
      it('should return false', () => {
        nonNumberPrimitives.forEach((x) =>
          expect(isNumberObject(x)).toBe(false)
        );
      });
    });
  });

  describe('isNumberLike()', () => {
    describe('when given a number primitive', () => {
      it('should return true', () => {
        expect(isNumber(primitives.number)).toBe(true);
      });
    });

    describe('when given a number object', () => {
      it('should return true', () => {
        // eslint-disable-next-line no-new-wrappers
        expect(isNumberLike(new Number('123'))).toBe(true);
      });
    });

    describe('when given non number primitives', () => {
      it('should return false', () => {
        nonNumberPrimitives.forEach((x) => expect(isNumberLike(x)).toBe(false));
      });
    });
  });
});
