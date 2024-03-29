module.exports = {
    rules: {
        //"dot-notation": "off",
        "eol-last": ["error", "always"],
        "no-unused-vars": ["warn", { "args": "none",  "ignoreRestSiblings": true }],
        "prefer-const": "warn",
        "prefer-spread": "warn",
        "no-duplicate-imports": "error",

        "space-before-function-paren": ["error", {"anonymous": "never", "named": "never", "asyncArrow": "always"}],
        "semi": ["warn", "always"],
        "comma-spacing": ["error", { "before": false, "after": true }],
        "quotes": ["error", "single", { "allowTemplateLiterals": true }],
        "indent": ["error", 4, {
            "SwitchCase": 1,
            "ignoredNodes": ["VariableDeclaration[declarations.length=0]"]
        }],
        "computed-property-spacing": "error",
        "array-bracket-spacing": "error",
        "arrow-spacing": ["error", { "before": true, "after": true }],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": "minimum"}],
        "space-unary-ops": ["error", { "words": true, "nonwords": false }],
        "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
        "space-in-parens": ["error", "never"],
        "function-paren-newline": ["error", "multiline-arguments"],
        "space-before-blocks": ["warn", "always"],
        "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
        "object-curly-spacing": ["warn", "always", { "arraysInObjects": false }],
        "keyword-spacing": ["warn", { "after": true }]
    }
}
