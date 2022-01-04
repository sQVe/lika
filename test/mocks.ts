// https://developer.mozilla.org/en-US/docs/Glossary/Primitive
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

interface PrimitiveMap {
  bigint: bigint;
  boolean: boolean;
  null: null;
  number: number;
  string: string;
  symbol: symbol;
  undefined: undefined;
}

export const primitives: PrimitiveMap = {
  bigint: BigInt(1),
  boolean: true,
  null: null,
  number: 1,
  string: 'string',
  symbol: Symbol('symbol'),
  undefined: undefined,
};
