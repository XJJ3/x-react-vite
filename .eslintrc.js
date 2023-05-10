module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended', // 整合typescript-eslint与prettier
    'prettier' // 使用prettier格式化代码
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'simple-import-sort', 'import'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    'no-var': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'no-shadow': 0, //  关闭全局的检查，采用 ts 的，避免 enum 的报错
    '@typescript-eslint/no-shadow': 2,
    'no-unused-vars': 0, // 关闭全局的检查，采用 ts 的，规避 enum 的报错
    '@typescript-eslint/no-unused-vars': 1,
    'prettier/prettier': 'error',
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'react/jsx-uses-react': 'off', // React 17及以后引入了新的 JSX 编译方式，无须在组件中显式地 import React，可关闭
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-vars': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages.
          // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
          ['^@?\\w'],
          // Absolute imports and other imports such as Vue-style `@/foo`.
          // Anything not matched in another group.
          ['^'],
          // Relative imports.
          // Anything that starts with a dot.
          ['^\\.'],
          // 样式放最后
          ['.*\\.(s|(post))?css$']
        ]
      }
    ]
  }
};
