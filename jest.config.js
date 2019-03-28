module.exports = {
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.test.{js,jsx}'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '.*\\.(css)$': '<rootDir>/mocks/css-module.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/image-mock.js',
    '^Components(.*)$': '<rootDir>/src/components$1',
    '^Styles(.*)$': '<rootDir>/src/styles$1',
    '^Images(.*)$': '<rootDir>/images$1',
  },
  testRegex: '.*\\.test\\.js$',
  snapshotSerializers: [],
};
