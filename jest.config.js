module.exports = {
  roots: ['<rootDir>/src'],
  collectCorverageFrom: [
    '<rooDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
