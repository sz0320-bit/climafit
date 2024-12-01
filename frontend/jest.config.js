
export default {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.tsx?$": "ts-jest",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    collectCoverage: true, // Enable coverage
    collectCoverageFrom: [
      "src/**/*.{js,jsx,ts,tsx}", // Include files for coverage calculation
      "!src/**/*.d.ts",          // Exclude declaration files
      "!src/index.ts"            // Exclude specific files
    ],
    coverageDirectory: "coverage", // Directory to store coverage reports
    coverageReporters: ["text", "lcov"], // Output formats
    coverageThreshold: { // Set thresholds to enforce minimum coverage
      global: {
        branches: 80,
        functions: 80,
        lines: 80,
        statements: 80
      }
    }
  };