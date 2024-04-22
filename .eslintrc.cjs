module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/no-unknown-property': ['error', { 'ignore': ['css'] }],
    'sort-imports': [
      'error',
      { ignoreCase: true, ignoreDeclarationSort: true}
    ],
    'import/order': [
      'error',
      {
        "groups": [
          "external",
          "builtin",
          "internal",
          "sibling",
          "parent",
          "index"
        ],
        "pathGroups": [
          {
            'pattern': 'react',
            'group':'external',
            'position': 'before'
          },
          {
            'pattern': '@components/**',
            'group':'internal'
          },
          {
            'pattern': '@layout/**',
            'group':'internal'
          },
          {
            "pattern": "common",
            "group": "internal"
          },
          {
            "pattern": "@assets/**",
            "group": "internal",
            "position": "after"
          }
        ],
        "pathGroupsExcludedImportTypes":
          ["internal", "react"],
        "alphabetize": {
          "order": "asc",
          "caseInsensitive": true
        }
      }
    ]
  }
}
