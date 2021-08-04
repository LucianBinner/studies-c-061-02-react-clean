module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: [
    '<rooDir>/src/**/*.{ts,tsx}'
  ],
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
