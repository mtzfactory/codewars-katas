function fibonacciCached(cache: Record<number, number> = {}) {
  return function fibonacci(n: number): number {
    if (n === 0 || n === 1) return n;
    if (n in cache) return cache[n];
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
  };
}

const fibonacci = fibonacciCached();
// Cassinis Identity: https://mathworld.wolfram.com/CassinisIdentity.html
const cassiniIdentity = (n: number) =>
  Math.pow(fibonacci(n), 2) + Math.pow(-1, n);

export const productFib = (prod: number): [number, number, boolean] => {
  let n = -1;
  let ab = 0;

  do {
    ab = cassiniIdentity(++n);
  } while (ab <= prod);

  const a = fibonacci(n - 1);
  const b = fibonacci(n);

  if (a * b === prod) {
    return [a, b, true];
  }

  const c = fibonacci(n + 1);

  return a * b < prod && b * c > prod ? [b, c, false] : [a, b, false];
};
