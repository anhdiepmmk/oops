module.exports = {
  setupFiles: ["./src/services/__mocks__/dom.js"],
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx)?$": "babel-jest",
  },
  globals: {
    TextDecoder: TextDecoder,
    TextEncoder: TextEncoder,
  },
};
