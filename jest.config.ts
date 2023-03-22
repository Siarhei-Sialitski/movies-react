import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  injectGlobals: true,
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  preset: 'ts-jest',
};

export default config;