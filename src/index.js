/* global module */
// Stylelint doesn't support Babel 6 default exports,
// so we have to use CommonJS exports instead.

import rules from './rules';

/**
 * Stylelint configuration used in Meetic projects.
 * @see http://stylelint.io/?/docs/user-guide/rules.md
 * @type Object
 */
module.exports = {
  rules
};
