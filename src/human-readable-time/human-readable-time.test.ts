import { humanReadable } from "./human-readable-time";

type TestCase = [number, string];

const testCases: TestCase[] = [
  [0, "00:00:00"],
  [59, "00:00:59"],
  [60, "00:01:00"],
  [90, "00:01:30"],
  [3599, "00:59:59"],
  [3600, "01:00:00"],
  [45296, "12:34:56"],
  [86399, "23:59:59"],
  [86400, "24:00:00"],
  [359999, "99:59:59"],
];

describe("humanReadable", function () {
  it.each(testCases)("should work for %s", function (seconds, solution) {
    expect(humanReadable(seconds)).toBe(solution);
  });
});
