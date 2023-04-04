export function partsSums(ls: number[]): number[] {
  const result = [0];

  for (let i = ls.length - 1; i >= 0; i--) {
    result.push(ls[i] + result[result.length - 1]);
  }

  return result.reverse();
}
