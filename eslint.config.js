import globals from 'globals';
import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import prettier from 'eslint-config-prettier';

export default [
    {
        ignores: ['node_modules/*', '.yarn/*', 'docs/*'],
    },
    js.configs.recommended,
    prettier,
    jsdoc.configs['flat/recommended'],
    {
        name: 'general ESLint config',
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'script',
            globals: {
                ...globals.browser,
                ...globals.es2024,
            },
        },
        rules: {
            'prefer-template': 'warn',
            'jsdoc/require-asterisk-prefix': 'warn',
            'jsdoc/no-blank-block-descriptions': 'warn',
            'jsdoc/no-blank-blocks': 'warn',
            'jsdoc/require-description': 'warn',
            'jsdoc/require-hyphen-before-param-description': 'warn',
            'jsdoc/require-jsdoc': [
                'warn',
                {
                    require: {
                        ArrowFunctionExpression: true,
                        ClassDeclaration: true,
                        ClassExpression: true,
                        FunctionDeclaration: true,
                        FunctionExpression: true,
                        MethodDefinition: true,
                    },
                },
            ],
            'jsdoc/require-throws': 'warn',
            'jsdoc/sort-tags': 'warn',
        },
    },
    {
        name: 'set sourceType to module for eslint.config.js',
        files: ['eslint.config.js'],
        languageOptions: {
            sourceType: 'module',
        },
    },
];
