import { diamond } from "./give-me-a-diamond";

type TestCase = [number, string | null];

const testCases: TestCase[] = [
  [1, "*\n"],
  [3, " *\n***\n *\n"],
  [5, "  *\n ***\n*****\n ***\n  *\n"],
  [7, "   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n"],
];

const invalidTestCases: TestCase[] = [
  [2, null],
  [-3, null],
  [0, null],
];

describe("diamond", function () {
  it.each(testCases)("should work for %s", function (n, solution) {
    expect(diamond(n)).toStrictEqual(solution);
  });

  it.each(invalidTestCases)(
    "should work for invalid case %s",
    function (n, solution) {
      expect(diamond(n)).toStrictEqual(solution);
    }
  );
});
