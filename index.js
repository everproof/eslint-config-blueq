module.exports = {
  "extends": [
    './rules/possibleErrors',
    './rules/bestPractices',
  ].map(require.resolve),
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "jsx": true,
    },
  },
  "rules": {
    "strict": 'error',
  },
}
