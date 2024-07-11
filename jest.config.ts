import type { Config } from "jest";

const config: Config = {
  verbose: true,
  transform: {},
  coveragePathIgnorePatterns: ["/node_modules/"],
};

export default config;
