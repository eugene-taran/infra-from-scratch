import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'


export default [
    ...tseslint.configs.recommended.map(cfg => ({
        files: ["**/*.ts"],
        ...cfg,
    })),
    {
        plugins: {
            '@stylistic': stylistic
        },
        files: ["**/*.ts"],
        rules: {
            '@stylistic/semi': ['error', 'never'],
            '@stylistic/quotes': ['error', 'single']
        },
    },
    eslintPluginPrettierRecommended,
    {
        files: ['**/*.{js,ts}'],
        rules: {
            'prettier/prettier': ['error', { semi: false, singleQuote: true }],
        }
    }
];
