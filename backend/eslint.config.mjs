import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

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
        }
    },
];