module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "env": {
        "browser": true,
    },
    "globals": {
        "document": false,
    },
    "rules": {
        "camelcase": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "array-callback-return": "off",
        "max-len": ["error", 120],
        "jsx-a11y/anchor-is-valid": "off",
        "jsx-a11y/media-has-caption": "off",
        "react/no-array-index-key": "off",
        "linebreak-style": ["error", "windows"],
        "no-shadow": "off",
        "react/jsx-one-expression-per-line": "off",
    },
};

// camelcase: 
//// if identifier refers to a function only then it should be in camelcase else use snake_case.

// import/extensions:
//// this is to allows jsx files to be imported without error.
//// Files that uses react have jsx extension for clear distinction.

// import/prefer-default-export:
//// action files may have only one function but default export to that only function affect is asymmetric to other action files.

// array-callback-return:
//// arrow function does not always have to return a value. Sometimes it can be used only because of its shorter syntax.

// max-len:
//// extending from 100 to 120. I have my reasons.

// jsx-a11y/anchor-is-valid:
//// bootstrap thing. Anchor tags goes into <li> item in dropdown-menu.

// jsx-a11y/media-has-caption:
//// we don't want <track> in video.

// react/no-array-index-key:
//// index is manipulated before being used as a key, hence not a valid warning.

// linebreak-style:
//// choose between "unix" and "windows" depending upon your OS. ref: https://eslint.org/docs/rules/linebreak-style

// no-shadow:
//// while using redux, we want to use same name of action as props as it was imported

// react/jsx-one-expression-per-line
//// multiline for readability