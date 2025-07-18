import globals from "globals";
import pluginJs from "@eslint/js";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { 
    sourceType:"module",
    globals: {
    ...globals.browser,
    ...globals.node }}},
  pluginJs.configs.recommended,
];