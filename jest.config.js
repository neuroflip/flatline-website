/** @type {import('ts-jest').JestConfigWithTsJest} */

module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  moduleNameMapper: {
    '^.+\\.(scss|css)$': '<rootDir>/tests/CSSStub.js',
    '^.+\\.html$': '<rootDir>/tests/HTMLStub.js'
  }
}
