import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  collectCoverage: true,
  collectCoverageFrom: ['!src/types/**/*.ts', 'src/**/*'],
  coveragePathIgnorePatterns: ['.*snap$', '/node_modules/', 'src/locales/'],
  coverageReporters: ['lcov', 'text', 'cobertura'],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  moduleNameMapper: {
    '^@components$': '<rootDir>/src/components',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '.+\\.(css|styl|less|sass|scss|png|gif|jpg|ttf|woff|woff2)$':
      'identity-obj-proxy',
  },
  transform: {
    '^.+\\.svg$': 'jest-svg-transformer',
    '^.+\\.(ts|js|tsx|jsx)$': 'babel-jest',
  },
};

export default config;
