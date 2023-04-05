const lastItem = (array: string[]) => array[array.length - 1];

export function diamond(n: number) {
  if (n < 0 || n % 2 === 0) return null;

  const result: string[] = ["*".repeat(n)];

  while (lastItem(result).trim() !== "*") {
    const lastStars = lastItem(result);
    const rowStars = " " + lastStars.slice(0, lastStars.length - 2);
    result.unshift(rowStars);
    result.push(rowStars);
  }

  return result.length > 1 ? result.join("\n") + "\n" : result[0] + "\n";
}
