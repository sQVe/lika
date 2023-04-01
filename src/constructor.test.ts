import { is } from '../src';
import { invalidConstructors, validContructors } from './mocks';

const trimNewlines = (val: unknown) => String(val).replace(/\n/g, '');

describe('constructor', () => {
  describe('is()', () => {
    describe('when value is an instance of supplied constructor', () => {
      validContructors.forEach(({ ctor, val }) =>
        it(`should match ${trimNewlines(val)} as instance of ${
          ctor.name
        }`, () => expect(is(ctor, val)).toBe(true))
      );
    });

    describe("when value isn't an instance of supplied constructor", () => {
      invalidConstructors.forEach(({ ctor, val }) =>
        it(`should not match ${trimNewlines(val)} as instance of ${
          ctor.name
        }`, () => expect(is(ctor, val)).toBe(false))
      );
    });

    describe('when using the curried variant', () => {
      it('should return a partially applied function', () => {
        const isString = is(String);

        expect(typeof isString).toBe('function');
        expect(isString(String())).toBe(true);
        expect(isString(false)).toBe(false);
      });
    });
  });
});
