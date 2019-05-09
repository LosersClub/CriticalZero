module.exports = {
  preset: "ts-jest",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "**/*.{js,ts}",
    "!**/node_modules/**",
    "!**/build/**",
    "!**/test/**",
    "!**/coverage/**",
    "!jest.config.js"
  ]
}