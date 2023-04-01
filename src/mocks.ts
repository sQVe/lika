import { Constructor } from './constructor';

interface PrimitiveMap {
  bigint: bigint;
  boolean: boolean;
  null: null;
  number: number;
  string: string;
  symbol: symbol;
  undefined: undefined;
}

interface IsTestPayload {
  ctor: Constructor<unknown>;
  val: unknown;
}

export const primitives: PrimitiveMap = {
  bigint: 9007199254740991n,
  boolean: true,
  null: null,
  number: 1,
  string: 'string',
  symbol: Symbol('symbol'),
  undefined: undefined,
};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
export const validContructors = [
  // Fundamental objects.
  { ctor: Boolean, val: new Boolean() }, // eslint-disable-line
  { ctor: Function, val: new Function() }, // eslint-disable-line
  { ctor: Object, val: new Object() }, // eslint-disable-line
  { ctor: Symbol, val: Symbol('') },

  // Error objects.
  { ctor: Error, val: new Error('') },
  { ctor: EvalError, val: new EvalError('') },
  { ctor: RangeError, val: new RangeError('') },
  { ctor: ReferenceError, val: new ReferenceError('') },
  { ctor: SyntaxError, val: new SyntaxError('') },
  { ctor: TypeError, val: new TypeError('') },
  { ctor: URIError, val: new URIError('') },

  // Dates and numbers.
  { ctor: Date, val: new Date() },
  { ctor: Number, val: new Number('1') }, // eslint-disable-line

  // Text processing.
  { ctor: RegExp, val: new RegExp('') }, // eslint-disable-line
  { ctor: String, val: new String('string') }, // eslint-disable-line

  // Indexed collections.
  { ctor: Array, val: new Array('array') },
  { ctor: BigInt64Array, val: new BigInt64Array(2) },
  { ctor: BigUint64Array, val: new BigUint64Array(2) },
  { ctor: Float32Array, val: new Float32Array(2) },
  { ctor: Float64Array, val: new Float64Array(2) },
  { ctor: Int16Array, val: new Int16Array(2) },
  { ctor: Int32Array, val: new Int32Array(2) },
  { ctor: Int8Array, val: new Int8Array(2) },
  { ctor: Uint16Array, val: new Uint16Array(2) },
  { ctor: Uint32Array, val: new Uint32Array(2) },
  { ctor: Uint8Array, val: new Uint8Array(2) },
  { ctor: Uint8ClampedArray, val: new Uint8ClampedArray(2) },

  // Keyed collections.
  { ctor: Map, val: new Map() },
  { ctor: Set, val: new Set() },
  { ctor: WeakMap, val: new WeakMap() },
  { ctor: WeakSet, val: new WeakSet() },

  // Structured data.
  { ctor: ArrayBuffer, val: new ArrayBuffer(8) },
  { ctor: DataView, val: new DataView(new ArrayBuffer(8)) },
  { ctor: SharedArrayBuffer, val: new SharedArrayBuffer(8) },

  // Control abstraction objects.
  { ctor: Promise, val: new Promise(() => {}) },

  // Inheritance.
  { ctor: Error, val: new ReferenceError('') },
  { ctor: Object, val: () => {} },
  { ctor: Object, val: [0, 0] },
  { ctor: Object, val: new Map() },
] as IsTestPayload[];

export const invalidConstructors = [
  { ctor: Array, val: {} },
  { ctor: ArrayBuffer, val: new DataView(new ArrayBuffer(8)) },
  { ctor: Boolean, val: 0 },
  { ctor: Boolean, val: null },
  { ctor: Boolean, val: undefined },
  { ctor: Date, val: 'string' },
  { ctor: Function, val: [] },
  { ctor: Map, val: new Set() },
  { ctor: Number, val: 'string' },
  { ctor: Promise, val: () => {} },
  { ctor: RegExp, val: 'string' },
  { ctor: Set, val: new Map() },
  { ctor: SharedArrayBuffer, val: new ArrayBuffer(8) },
  { ctor: String, val: 0 },
  { ctor: Symbol, val: 0 },
  { ctor: WeakMap, val: new WeakSet() },
  { ctor: WeakSet, val: new WeakMap() },
] as IsTestPayload[];
