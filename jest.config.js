module.exports = {
  automock: false,
  setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/**/*.test.{js,jsx}'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 30,
      functions: 70,
      lines: 60,
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
    '^Redux(.*)$': '<rootDir>/src/redux$1',
  },
  testRegex: '.*\\.test\\.js$',
  snapshotSerializers: [],
};
