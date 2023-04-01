import { isDefined, isNil, isNull, isUndefined } from '../src';
import { primitives } from './mocks';

describe('nil', () => {
  describe('isNull()', () => {
    const nonNullPrimitives = Object.entries(primitives)
      .filter(([key]) => key !== 'null')
      .map(([_, primitive]) => primitive);

    describe('when given a null primitive', () => {
      it('should return true', () => {
        expect(isNull(primitives.null)).toBe(true);
      });
    });

    describe('when given non null primitives', () => {
      it('should return false', () => {
        nonNullPrimitives.forEach((x) => expect(isNull(x)).toBe(false));
      });
    });
  });

  describe('isUndefined()', () => {
    const nonUndefinedPrimitives = Object.entries(primitives)
      .filter(([key]) => key !== 'undefined')
      .map(([_, primitive]) => primitive);

    describe('when given a undefined primitive', () => {
      it('should return true', () => {
        expect(isUndefined(primitives.undefined)).toBe(true);
      });
    });

    describe('when given non undefined primitives', () => {
      it('should return false', () => {
        nonUndefinedPrimitives.forEach((x) =>
          expect(isUndefined(x)).toBe(false)
        );
      });
    });
  });

  describe('isDefined()', () => {
    const definedPrimitives = Object.entries(primitives)
      .filter(([key]) => key !== 'null' && key !== 'undefined')
      .map(([_, primitive]) => primitive);

    describe('when given a null primitive', () => {
      it('should return false', () => {
        expect(isDefined(primitives.null)).toBe(false);
      });
    });

    describe('when given a undefined primitive', () => {
      it('should return false', () => {
        expect(isDefined(primitives.undefined)).toBe(false);
      });
    });

    describe('when given defined primitives', () => {
      it('should return true', () => {
        definedPrimitives.forEach((x) => expect(isDefined(x)).toBe(true));
      });
    });
  });

  describe('isNil()', () => {
    const nonNilPrimitives = Object.entries(primitives)
      .filter(([key]) => key !== 'null' && key !== 'undefined')
      .map(([_, primitive]) => primitive);

    describe('when given a null primitive', () => {
      it('should return true', () => {
        expect(isNil(primitives.null)).toBe(true);
      });
    });

    describe('when given a undefined primitive', () => {
      it('should return true', () => {
        expect(isNil(primitives.undefined)).toBe(true);
      });
    });

    describe('when given non nil primitives', () => {
      it('should return false', () => {
        nonNilPrimitives.forEach((x) => expect(isNil(x)).toBe(false));
      });
    });
  });
});
