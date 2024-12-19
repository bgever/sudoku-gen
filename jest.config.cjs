const { createDefaultPreset } = require('ts-jest');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  collectCoverage: true,
  ...createDefaultPreset({
    tsconfig: 'tsconfig.cjs.json',
  }),
};
