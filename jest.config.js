module.exports = {
  testEnvironment: 'node',
  testRegex: '.*\\.(test|spec)?\\.ts$',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
}
