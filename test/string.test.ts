import { isString, isStringLike, isStringObject } from '../src';
import { primitives } from './mocks';

describe('string', () => {
  const nonStringPrimitives = Object.entries(primitives)
    .filter(([key]) => key !== 'string')
    .map(([_, primitive]) => primitive);

  describe('isString()', () => {
    describe('when given a string primitive', () => {
      it('should return true', () => {
        expect(isString(primitives.string)).toBe(true);
      });
    });

    describe('when given a string object', () => {
      it('should return false', () => {
        // eslint-disable-next-line no-new-wrappers
        expect(isString(new String('String'))).toBe(false);
      });
    });

    describe('when given non string primitives', () => {
      it('should return false', () => {
        nonStringPrimitives.forEach((x) => expect(isString(x)).toBe(false));
      });
    });
  });

  describe('isStringObject()', () => {
    describe('when given a string primitive', () => {
      it('should return false', () => {
        expect(isStringObject(primitives.string)).toBe(false);
      });
    });

    describe('when given a string object', () => {
      it('should return true', () => {
        // eslint-disable-next-line no-new-wrappers
        expect(isStringObject(new String('String'))).toBe(true);
      });
    });

    describe('when given non string primitives', () => {
      it('should return false', () => {
        nonStringPrimitives.forEach((x) => expect(isString(x)).toBe(false));
      });
    });
  });

  describe('isStringLike()', () => {
    describe('when given a string primitive', () => {
      it('should return true', () => {
        expect(isString(primitives.string)).toBe(true);
      });
    });

    describe('when given a string object', () => {
      it('should return true', () => {
        // eslint-disable-next-line no-new-wrappers
        expect(isStringLike(new String('String'))).toBe(true);
      });
    });

    describe('when given non string primitives', () => {
      it('should return false', () => {
        nonStringPrimitives.forEach((x) => expect(isString(x)).toBe(false));
      });
    });
  });
});
