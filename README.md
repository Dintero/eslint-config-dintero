# Dintero Eslint Config

This is a suggestion ment as a basis, please make suggestions for changes either via comment, pr, or otherwise. 

It's based on eslint's recommended config and separated by usecases, primarily frontend (react) and backend projects combined with javascript/typescript. 

## eslint-config-recommended

Includes many rules that aims to catch bugs/errors or bad practices: such as

- prefer const (No `var` and no `let` if variable is never re-assigned)
- no-global-assign
- no-duplicate-imports
- no-extraneous-dependencies (prevents importing packages not listed as dependencies but otherwise available)
- eqeqeq (use === and !== instead of == and !=)
- no-eval 
- no-implicit-global
- no-unmodified-loop-condition

see more at https://github.com/kunalgolani/eslint-config/blob/master/packages/esnext/index.yaml 

## Usage

Having this repo/package as a dev-dependency, create an `.eslintrc.json` file with the following: (example for a React project)
```
{
    "extends": [ "dintero/react" ]
}
```
