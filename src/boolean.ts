/**
 * Check if the given value `x` is a `boolean` primitive.
 * @param x - The value to be checked.
 * @returns True if `x` is a `boolean` primitive, otherwise false.
 */
export const isBoolean = (x: unknown): x is boolean => typeof x === 'boolean';
