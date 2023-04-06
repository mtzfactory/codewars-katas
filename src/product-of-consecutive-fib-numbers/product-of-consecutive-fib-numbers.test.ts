import { productFib } from "./product-of-consecutive-fib-numbers";

type TestCase = [number, [number, number, boolean]];

const testCases: TestCase[] = [
  [4895, [55, 89, true]],
  [5895, [89, 144, false]],
  [74049690, [6765, 10946, true]],
  [84049690, [10946, 17711, false]],
  [193864606, [10946, 17711, true]],
  [447577, [610, 987, false]],
  [602070, [610, 987, true]],
];

describe("productFib", function () {
  it.each(testCases)("should work for %s", function (prod, solution) {
    expect(productFib(prod)).toStrictEqual(solution);
  });
});
