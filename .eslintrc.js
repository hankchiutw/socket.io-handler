module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "classes": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": 0,
    "no-trailing-spaces": 2,
    "react/jsx-uses-vars": 2,
    "curly": "warn",
    "space-before-blocks": [
      "warn",
      {
        "functions": "always"
      }
    ],
    "keyword-spacing": [
      "warn",
      {
        "before": true,
        "after": true
      }
    ],
    "indent": [
      "warn",
      2,
      { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "off",
      "single"
    ],
    "semi": [
      "warn",
      "always"
    ]
  }
};
