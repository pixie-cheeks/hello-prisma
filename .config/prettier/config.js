import * as voidHtmlPlugin from '@awmottaz/prettier-plugin-void-html';

/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  plugins: [voidHtmlPlugin],
  singleQuote: true,
};

export default config;
