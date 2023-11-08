module.exports = {
  'env': {
    'node'   : true,
    'es2021' : true
  },
  plugins: [
    'jest'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion' : 'latest',
    'sourceType'  : 'module'
  },
  'rules': {
    'quotes' : ['error', 'single'],
    'semi'   : ['error', 'always'],
    'indent' : ['error', 2, {
      'SwitchCase': 1, 'VariableDeclarator': 'first', 'MemberExpression': 1, 'ObjectExpression': 1, 'ImportDeclaration': 1, 'ArrayExpression': 1
    }],
    'prefer-const': ['error', {
      'ignoreReadBeforeAssign': false
    }],
    'linebreak-style'    : 0,
    'operator-linebreak' : ['error', 'before'],
    'key-spacing'        : ['error', {
      'align': {
        'beforeColon' : true,
        'afterColon'  : true,
        'on'          : 'colon'
      }
    }],
    'arrow-parens'              : 0,
    'max-len'                   : 0,
    'generator-star-spacing'    : 'off',
    'keyword-spacing'           : ['error', { 'before': true, 'after': true }],
    'space-before-blocks'       : 'error',
    'curly'                     : ['error', 'all'],
    'eqeqeq'                    : ['error', 'always'],
    'space-infix-ops'           : 'error',
    'array-element-newline'     : ['error', 'consistent'],
    'array-bracket-spacing'     : ['error', 'never'],
    'block-spacing'             : 'error',
    'brace-style'               : ['error', '1tbs'],
    'comma-dangle'              : ['error', 'never'],
    'comma-spacing'             : ['error', { 'before': false, 'after': true }],
    'comma-style'               : ['error', 'last'],
    'computed-property-spacing' : ['error', 'never'],
    'no-underscore-dangle'      : 0,
    'no-multi-spaces'           : ['error', { 'exceptions': { 'VariableDeclarator': true, 'ImportDeclaration': true, 'AssignmentExpression': true } }],
    // 'no-param-reassign': ['error', { 'props': false }],
    'no-empty-function'         : 'error',
    'no-loop-func'              : 'error',
    'no-undefined'              : 'error',
    'no-use-before-define'      : ['error', { 'functions': true, 'classes': true }],
    'no-multi-assign'           : 'error',
    'no-duplicate-imports'      : 'error',
    'no-console'                : 'error'
  }
};
