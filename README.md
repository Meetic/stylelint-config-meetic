# stylelint-config-meetic

A set of configurable [Stylelint][1] configurations used in [Meetic][2] projects.

## Installation

Install this config package and Stylelint:

```bash
npm install stylelint-config-meetic --save-dev
```

## Usage

This set of configs is meant to be extended on a per-project basis as necessary
using Stylelint's shareable configs feature. For more details about how shareable
configs work, see the [Stylelint documentation][3].

```json
{
  "extends": "meetic"
}
```

## License

[MIT License][4]

[1]: http://stylelint.io/
[2]: http://www.meetic.fr
[3]: http://stylelint.io/?/docs/user-guide/configuration.md
[4]: http://opensource.org/licenses/MIT
