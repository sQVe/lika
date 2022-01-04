import { is } from './helpers';

/** Check if value `x` is a `string` primitive. */
export const isString = (x: unknown): x is string => typeof x === 'string';

/** Check if value `x` is a `String` object. */
export const isStringObject = (x: unknown): x is String =>
  !isString(x) && is(String)(x);

/** Check if value `x` is a instance of `String` object. */
export const isStringLike = is<string | String>(String);
