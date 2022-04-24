const config = require('eslint-config-standard-typescript-prettier')
console.log('config', config)

/** @ts-check @type import('eslint-config-standard-typescript-prettier/types').TsEslintConfig */
module.exports = {
    ...config,
    overrides: [
        {
            files: ['*.ts'],
            parserOptions: {
                project: './tsconfig.json',
            },
            extends: 'standard-with-typescript',
            rules: {
                ...config.rules,
                '@typescript-eslint/space-before-function-paren': 'off',
                '@typescript-eslint/indent': 'off',
                '@typescript-eslint/no-explicit-any': 'error',
                '@typescript-eslint/no-var-requires': 'off',
            },
        },
    ],
    rules: {},
}
