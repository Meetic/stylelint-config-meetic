# stylelint-config-meetic

[![NPM version](http://img.shields.io/npm/v/stylelint-config-meetic.svg)](https://www.npmjs.org/package/stylelint-config-meetic)
[![Build Status](https://travis-ci.org/meetic/stylelint-config-meetic.svg?branch=master)](https://travis-ci.org/meetic/stylelint-config-meetic)

A configurable [Stylelint](http://stylelint.io/) configuration used in [Meetic](https://github.com/Meetic) projects.

The purpose of this library is to promote code style consistency across complex projects in organizations of all sizes.

## Installation

Install this config package and Stylelint:

```bash
npm install stylelint-config-meetic --save-dev
```

## Usage

Create a .stylelintrc file with the following basic configuration:

```json
{
  "extends": "stylelint-config-meetic"
}
```

This configuration is meant to be extended on a per-project basis as necessary
using Stylelint's shareable configs feature. For more details about how shareable
configs work, see the [Stylelint documentation](http://stylelint.io/?/docs/user-guide/configuration.md).

## Example

```css
/* colors.css */

:root {
  --my-color-a: #f00;
  --my-color-b: #00f;
}
```

```css
/* media.css */

@custom-media --small (width >= 100px) and (width <= 200px);
```

```css
/* main.css */

@import './colors';
@import './media';

.component-a,
.component-b {
  color: var(--my-color-a);
  box-shadow:
    0 0 0 1px #5b9dd9,
    0 0 2px 1px rgba(30, 140, 190, 0.8);
}

@media (--small) {
  .component-a {
    color: var(--my-color-b);
  }
}
```

A more comprehensive list of examples is available in the [examples](https://github.com/Meetic/stylelint-config-meetic/tree/master/examples) folder.

## Similar projects

A configuration for linting JavaScript (ES5 & ES6) with [eslint](http://eslint.org/) is available at [eslint-config-meetic](https://github.com/Meetic/eslint-config-meetic).

## Tests

```bash
npm install && npm test
```

## License

[MIT License](http://opensource.org/licenses/MIT)
