import { is } from '../src'
import { Constructor } from '../src/types'

interface InstanceOfPayload {
  ctor: Constructor<unknown>
  name: string
  val: unknown
}

const trimNewlines = (val: unknown) => String(val).replace(/\n/g, '')

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

describe('helpers', () => {
  describe('is()', () => {
    describe('when value is an instance of supplied constructor', () => {
      const validPayloads = [
        // Fundamental objects.
        { ctor: Boolean, name: 'Boolean', val: new Boolean() }, // eslint-disable-line
        { ctor: Function, name: 'Function', val: new Function() }, // eslint-disable-line
        { ctor: Object, name: 'Object', val: new Object() }, // eslint-disable-line
        { ctor: Symbol, name: 'Symbol', val: Symbol('') },

        // Error objects.
        { ctor: Error, name: 'Error', val: new Error('') },
        { ctor: EvalError, name: 'EvalError', val: new EvalError('') },
        { ctor: RangeError, name: 'RangeError', val: new RangeError('') },
        {
          ctor: ReferenceError,
          name: 'ReferenceError',
          val: new ReferenceError(''),
        },
        { ctor: SyntaxError, name: 'SyntaxError', val: new SyntaxError('') },
        { ctor: TypeError, name: 'TypeError', val: new TypeError('') },
        { ctor: URIError, name: 'URIError', val: new URIError('') },

        // Dates and numbers.
        { ctor: Date, name: 'Date', val: new Date() },
        { ctor: Number, name: 'Number', val: new Number('1') }, // eslint-disable-line

        // Text processing.
        { ctor: RegExp, name: 'RegExp', val: new RegExp('') }, // eslint-disable-line
        { ctor: String, name: 'String', val: new String('string') }, // eslint-disable-line

        // Indexed collections.
        { ctor: Array, name: 'Array', val: new Array('array') },
        {
          ctor: BigInt64Array,
          name: 'BigInt64Array',
          val: new BigInt64Array(2),
        },
        {
          ctor: BigUint64Array,
          name: 'BigUint64Array',
          val: new BigUint64Array(2),
        },
        { ctor: Float32Array, name: 'Float32Array', val: new Float32Array(2) },
        { ctor: Float64Array, name: 'Float64Array', val: new Float64Array(2) },
        { ctor: Int16Array, name: 'Int16Array', val: new Int16Array(2) },
        { ctor: Int32Array, name: 'Int32Array', val: new Int32Array(2) },
        { ctor: Int8Array, name: 'Int8Array', val: new Int8Array(2) },
        { ctor: Uint16Array, name: 'Uint16Array', val: new Uint16Array(2) },
        { ctor: Uint32Array, name: 'Uint32Array', val: new Uint32Array(2) },
        { ctor: Uint8Array, name: 'Uint8Array', val: new Uint8Array(2) },
        {
          ctor: Uint8ClampedArray,
          name: 'Uint8ClampedArray',
          val: new Uint8ClampedArray(2),
        },

        // Keyed collections.
        { ctor: Map, name: 'Map', val: new Map() },
        { ctor: Set, name: 'Set', val: new Set() },
        { ctor: WeakMap, name: 'WeakMap', val: new WeakMap() },
        { ctor: WeakSet, name: 'WeakSet', val: new WeakSet() },

        // Structured data.
        { ctor: ArrayBuffer, name: 'ArrayBuffer', val: new ArrayBuffer(8) },
        {
          ctor: DataView,
          name: 'DataView',
          val: new DataView(new ArrayBuffer(8)),
        },
        {
          ctor: SharedArrayBuffer,
          name: 'SharedArrayBuffer',
          val: new SharedArrayBuffer(8),
        },

        // Control abstraction objects.
        { ctor: Promise, name: 'Promise', val: new Promise(() => {}) },

        // Inheritance.
        { ctor: Object, name: 'Object', val: [0, 0] },
        { ctor: Object, name: 'Object', val: () => {} },
        { ctor: Object, name: 'Object', val: new Map() },
      ] as InstanceOfPayload[]

      validPayloads.forEach(({ ctor, name, val }) => {
        it(`should match ${trimNewlines(val)} as instance of ${name}`, () => {
          expect(is(ctor, val)).toBe(true)
        })
      })
    })

    describe("when value isn't an instance of supplied constructor", () => {
      const invalidObjects = [{ ctor: Boolean, name: 'Boolean', val: null }]

      invalidObjects.forEach(({ ctor, name, val }) => {
        it(`should not match ${trimNewlines(
          val
        )} as instance of ${name}`, () => {
          expect(is(ctor, val)).toBe(false)
        })
      })
    })
  })
})
