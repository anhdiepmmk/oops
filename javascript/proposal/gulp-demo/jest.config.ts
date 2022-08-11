
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['/node_modules\/(.*)'], 
  maxWorkers: 3,
  testTimeout: 5000,
}