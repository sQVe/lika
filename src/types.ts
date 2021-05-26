export type TypeGuard<T> = (
  /** The value to test. */
  x: unknown
) => x is T

export type Constructor<T> = Function & { prototype: T }
