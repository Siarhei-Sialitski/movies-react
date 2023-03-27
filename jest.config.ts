import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  testEnvironment: "jsdom",
  injectGlobals: true,
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  preset: "ts-jest",
};

export default config;
