/**
 * Check if the given value `x` is a `null` primitive.
 * @param x - The value to be checked.
 * @returns True if `x` is a `null` primitive, otherwise false.
 */
export const isNull = (x: unknown): x is null => x === null;

/**
 * Check if the given value `x` is an `undefined` primitive.
 * @param x - The value to be checked.
 * @returns True if `x` is an `undefined` primitive, otherwise false.
 */
export const isUndefined = (x: unknown): x is undefined => x === undefined;

/**
 * Check if the given value `x` is a `null` or `undefined` primitive.
 * @param x - The value to be checked.
 * @returns True if `x` is a `null` or `undefined` primitive, otherwise false.
 */
export const isNil = (x: unknown): x is null | undefined =>
  x === null || x === undefined;

/**
 * Check if the given value `x` isn't a `null` or `undefined` primitive.
 * @param x - The value to be checked.
 * @returns True if `x` is not a `null` or `undefined` primitive, otherwise false.
 */
export const isDefined = <T>(x: T | null | undefined): x is T => !isNil(x);
