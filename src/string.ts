import { is } from './constructor';

/**
 * Check if the given value `x` is a `string` primitive.
 * @param x - The value to be checked.
 * @returns True if `x` is a `string` primitive, otherwise false.
 */
export const isString = (x: unknown): x is string => typeof x === 'string';

/**
 * Check if the given value `x` is a `String` object.
 * @param x - The value to be checked.
 * @returns True if `x` is a `String` object, otherwise false.
 */
export const isStringObject = (x: unknown): x is String =>
  !isString(x) && is(String)(x);

/**
 * Check if the given value `x` is an instance of `String` (either a `string`
 * primitive or a `String` object).
 * @param x - The value to be checked.
 * @returns True if `x` is an instance of `String`, otherwise false.
 */
export const isStringLike = is<string | String>(String);
