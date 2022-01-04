import { Constructor } from './types'

const checkInstance = <T>(ctor: Constructor<T>, val: unknown): val is T =>
  (val != null && (val as Object).constructor === ctor) || val instanceof ctor

/** Check if value `x` is an instance of supplied constructor. */
export function is<T>(
  /** A constructor to compare with. */
  ctor: Constructor<T>,
  /** The value to test. */
  val: unknown
): val is T
export function is<T>(ctor: Constructor<T>): (val: unknown) => val is T
export function is(...args: any[]) {
  const [ctor, val] = args

  if (args.length === 1) {
    return (val: unknown) => checkInstance(ctor, val)
  }

  return checkInstance(ctor, val)
}
