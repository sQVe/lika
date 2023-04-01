export type Constructor<T> = Function & { prototype: T };

const checkInstance = <T>(ctor: Constructor<T>, val: unknown): val is T =>
  (val != null && (val as Object).constructor === ctor) || val instanceof ctor;

/**
 * Check if the given value `x` is an instance of the supplied constructor.
 * @param ctor - The constructor to compare with.
 * @param val - The value to test.
 * @returns True if `x` is an instance of the specified constructor, otherwise false.
 */
export function is<T>(ctor: Constructor<T>, val: unknown): val is T;

/**
 * Create a type guard function that checks if a given value is an instance of the specified constructor.
 * @param ctor - A constructor to compare with.
 * @returns A type guard function.
 */
export function is<T>(ctor: Constructor<T>): (val: unknown) => val is T;

export function is(...args: any[]) {
  const [ctor, val] = args;

  if (args.length === 1) {
    return (val: unknown) => checkInstance(ctor, val);
  }

  return checkInstance(ctor, val);
}
