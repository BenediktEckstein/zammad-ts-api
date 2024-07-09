import type { Config } from "jest";

const config: Config = {
  verbose: true,
  transform: {},
  coveragePathIgnorePatterns: ["/node_modules/", "/test"],
};

export default config;
