module.exports = {
  rootDir: '../',
  roots: ['<rootDir>/src', '<rootDir>/config'],
  setupFilesAfterEnv: ['<rootDir>/scripts/jest-setup.js'],
  testResultsProcessor: '<rootDir>/node_modules/jest-html-reporter',
  reporters: [
    'default',
    [
      '<rootDir>/node_modules/jest-html-reporter',
      {
        pageTitle: 'React SSR',
        outputPath: '../test-report/cases/index.html',
        includeFailureMsg: true,
        includeConsoleLog: true,
        executionMode: 'reporter',
        theme: 'lightTheme'
      }
    ]
  ],
  collectCoverageFrom: ['**/*.{js,jsx}', '!node_modules/**'],
  coverageDirectory: '<rootDir>/test-report/coverage',
  coverageThreshold: {
    global: {
      branches: 0, //change to 80 and push to test
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  testMatch: [
    '**/__tests__/**/*.{js,jsx}',
    '**/?(*-)(spec|test).{js,jsx}',
    '**/tests.js'
  ],
  moduleNameMapper: {
    '^@config(.*)$': '<rootDir>/config$1',
    '^@redux(.*)$': '<rootDir>/src/client/state/redux$1',
    '^@scaffolding(.*)$': '<rootDir>/src/client/core/scaffolding$1',
    '^@components(.*)$': '<rootDir>/src/client/core/components$1',
    '^@pages(.*)$': '<rootDir>/src/client/core/pages$1',
    '^@modules(.*)$': '<rootDir>/src/client/modules$1',
    '^@mocks(.*)$': '<rootDir>/src/client/state/mocks$1',
    '^styles(.*)$': '<rootDir>/src/client/core/styles$1',
    '^@assets(.*)$': '<rootDir>/src/client/core/assets$1'
  }
};
