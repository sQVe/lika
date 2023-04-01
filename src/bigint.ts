/**
 * Check if the given value `x` is a `bigint` primitive.
 * @param x - The value to be checked.
 * @returns True if `x` is a `bigint` primitive, otherwise false.
 */
export const isBigInt = (x: unknown): x is bigint => typeof x === 'bigint';
