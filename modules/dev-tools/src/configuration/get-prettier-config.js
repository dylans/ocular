/** @typedef {import('./get-prettier-config')} types */

const DEFAULT_CONFIG = {
  printWidth: 100,
  semi: true,
  singleQuote: true,
  trailingComma: 'none',
  bracketSpacing: false
};

/** @type {types['getPrettierConfig']} */
export function getPrettierConfig(options) {
  const config = DEFAULT_CONFIG;
  return config;
};
