import { is } from './constructor';

/**
 * Check if the given value `x` is a `number` primitive.
 * @param x - The value to be checked.
 * @returns True if `x` is a `number` primitive, otherwise false.
 */
export const isNumber = (x: unknown): x is number =>
  typeof x === 'number' && !isNaN(x);

/**
 * Check if the given value `x` is a `Number` object.
 * @param x - The value to be checked.
 * @returns True if `x` is a `Number` object, otherwise false.
 */
export const isNumberObject = (x: unknown): x is Number =>
  !isNumber(x) && is(Number)(x);

/**
 * Check if the given value `x` is an instance of `Number` (either a `number`
 * primitive or a `Number` object).
 * @param x - The value to be checked.
 * @returns True if `x` is an instance of `Number`, otherwise false.
 */
export const isNumberLike = is<number | Number>(Number);
