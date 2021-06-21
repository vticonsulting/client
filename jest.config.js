module.exports = {
  verbose: false,
  preset: '@vue/cli-plugin-unit-jest',
  setupFilesAfterEnv: ['./jest.setup.js'],
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue-tjw'],
  collectCoverageFrom: ['**/src/**/*.js'],
  // coverageThreshold: {
  //   global: {
  //     statements: 15,
  //     branches: 10,
  //     functions: 15,
  //     lines: 15,
  //   },
  //   './src/shared/utils.js': {
  //     statements: 100,
  //     branches: 50,
  //     functions: 100,
  //     lines: 100,
  //   },
  // },
}
