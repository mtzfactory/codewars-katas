import { orderWeight } from "./weight-for-weight";

type TestCase = [string, string];

const testCases: TestCase[] = [
  ["103 123 4444 99 2000", "2000 103 123 4444 99"],
  [
    "2000 10003 1234000 44444444 9999 11 11 22 123",
    "11 11 2000 10003 22 123 1234000 44444444 9999",
  ],
];

describe("orderWeight", function () {
  it.each(testCases)("should work for %s", function (weights, solution) {
    expect(orderWeight(weights)).toBe(solution);
  });
});
