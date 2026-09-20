import { defineConfig } from 'lint-staged/config';

const prettier =
  'prettier --config .config/prettier/config.ts --ignore-path=.gitignore --ignore-path=.config/prettier/ignore';

export default defineConfig({
  '*': `${prettier} --write --ignore-unknown`,
});
