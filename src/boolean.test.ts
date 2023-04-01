import { isBoolean } from '../src';
import { primitives } from './mocks';

describe('boolean', () => {
  const nonBooleanPrimitives = Object.entries(primitives)
    .filter(([key]) => key !== 'boolean')
    .map(([_, primitive]) => primitive);

  describe('isBoolean()', () => {
    describe('when given a boolean primitive', () => {
      it('should return true', () => {
        expect(isBoolean(primitives.boolean)).toBe(true);
      });
    });

    describe('when given a boolean via primitive wrapper', () => {
      it('should return true', () => {
        expect(isBoolean(Boolean('true'))).toBe(true);
      });
    });

    describe('when given non boolean primitives', () => {
      it('should return false', () => {
        nonBooleanPrimitives.forEach((x) => expect(isBoolean(x)).toBe(false));
      });
    });
  });
});
