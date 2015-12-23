import rulePropertiesOrder from './rule-properties-order';

/**
 * Ruleset
 * @see http://stylelint.io/?docs/user-guide/rules.md
 * @type Object
 */
export default {

  //
  // String
  // --------------------

  'string-quotes': 'single',

  //
  // Color
  // --------------------

  'color-hex-case': 'lower', // enforce lowercase hex colors
  'color-hex-length': 'short', // enforce short notation for hex colors where possible
  // 'color-no-hex': true, // disallow hex colors
  'color-no-invalid-hex': true, // disallow invalid hex colors
  'color-no-named': true, // disallow named colors

  //
  // Number
  // --------------------

  'number-leading-zero': 'always', // require a leading zero for fractional numbers less than 1
  'number-max-precision': 6, // limit the number of decimal places allowed in numbers
  'number-no-trailing-zeros': true, // disallow trailing zeros within numbers
  'number-zero-length-no-unit': true, // disallow units for zero lengths

  //
  // Function
  // --------------------

  'function-blacklist': [], // a blacklist of disallowed functions
  'function-calc-no-unspaced-operator': true, // disallow an unspaced operator within calc functions
  'function-comma-newline-after': 'never-multi-line', // no whitespace before the commas in multi-line functions
  'function-comma-newline-before': 'never-multi-line', // no whitespace before the commas in multi-line functions
  'function-comma-space-after': 'always', // there must always be a single space after the commas
  'function-comma-space-before': 'never', // there must never be whitespace before the commas
  'function-linear-gradient-no-nonstandard-direction': true, // disallow non-standard direction in linear-gradient()
  'function-parentheses-newline-inside': 'never-multi-line', // disallow whitespace on the inside of the parentheses
  'function-parentheses-space-inside': 'never', // there must never be whitespace on the inside the parentheses
  'function-url-quotes': 'single', // there must always be single quotes around url
  // 'function-whitelist': [], // a whitelist of only allowed functions
  'function-whitespace-after': 'always', // there must always be whitespace after the function

  //
  // Value
  // --------------------

  'value-no-vendor-prefix': true, // disallow vendor prefixes for values

  //
  // Value list
  // --------------------

  'value-list-comma-newline-after': 'always-multi-line', // enforce a newline after commas in multi-line value lists
  'value-list-comma-newline-before': 'never-multi-line', // disallow whitespace before commas in multi-line value lists
  'value-list-comma-space-after': 'always-single-line', // enforce single space after commas in single-line value lists
  'value-list-comma-space-before': 'never-single-line', // disallow whitespace before commas in single-line value lists

  //
  // Unit
  // --------------------

  'unit-blacklist': ['em', 'in', 'cm', 'mm'], // a blacklist of disallowed units
  // 'unit-whitelist': [], // a whitelist of allowed units

  //
  // Property
  // --------------------

  // 'property-blacklist': [], // a blacklist of disallowed properties
  // 'property-whitelist': [], // a whitelist of allowed properties
  'property-no-vendor-prefix': true, // disallow vendor prefixes for properties
  // 'property-unit-blacklist': {}, // a blacklist of disallowed units for specific properties
  // 'property-unit-whitelist': {}, // a whitelist of allowed units for specific properties

  //
  // Custom property
  // --------------------

  // 'custom-property-no-outside-root': true, // disallow custom properties outside of :root selectors
  // 'custom-property-pattern': /foo-.+/, // enforce pattern of custom properties

  //
  // Declaration
  // --------------------

  'declaration-bang-space-after': 'never', // disallow whitespace after the bang of declarations
  'declaration-bang-space-before': 'always', // there must always be a single space before the bang
  'declaration-colon-newline-after': 'always-multi-line', // enforce newline after the colon in multi-line declarations
  'declaration-colon-space-after': 'always-single-line', // enforce a single space after the colon in single-line decl.
  'declaration-colon-space-before': 'never', // there must never be whitespace before the colon
  'declaration-no-important': true, // disallow !important within declarations

  //
  // Declaration block
  // --------------------

  'declaration-block-no-single-line': true, // disallow single-line declaration blocks
  'declaration-block-semicolon-newline-after': 'always', // there must always be a newline after the semicolon
  'declaration-block-semicolon-newline-before': 'never-multi-line', // disallow whitespace before ; in multi-line rules
  'declaration-block-semicolon-space-after': 'always-single-line', // enforce a single space after ; in single-line
  'declaration-block-semicolon-space-before': 'never', // disallow whitespace before the semicolons
  'declaration-block-single-line-max-declarations': 1, // limit the number of declarations within a single line block

  //
  // Block
  // --------------------

  'block-closing-brace-newline-after': 'always', // enforce a newline after {
  'block-closing-brace-newline-before': 'always-multi-line', // enforce a newline before } in multi-line blocks
  'block-closing-brace-space-after': 'always-single-line', // enforce a single space after } in single-line blocks
  'block-closing-brace-space-before': 'always-single-line', // enforce a single space before } in single-line blocks
  'block-no-empty': true, // disallow empty blocks
  'block-opening-brace-newline-after': 'always-multi-line', // enforce a newline after { in multi-line blocks
  // 'block-opening-brace-newline-before': '' // require a newline or disallow whitespace before { of blocks
  'block-opening-brace-space-after': 'always-single-line', // enforce a single space after { in single-line blocks
  'block-opening-brace-space-before': 'always', // enforce a single space before {

  //
  // Selector
  // --------------------

  // 'selector-class-pattern': /foo-[a-z]+/, // a pattern for class selectors
  'selector-combinator-space-after': 'always', // require a single space after the combinators of selectors
  'selector-combinator-space-before': 'always', // require a single space before the combinators of selectors
  // 'selector-id-pattern': '', // a pattern for id selectors
  'selector-no-attribute': true, // disallow attribute selectors
  'selector-no-combinator': true, // disallow combinators in selectors
  'selector-no-id': true, // disallow id selectors
  'selector-no-type': true, // disallow type selectors
  'selector-no-universal': true, // disallow universal selectors
  'selector-no-vendor-prefix': true, // disallow vendor prefixes for selectors
  'selector-pseudo-element-colon-notation': 'double', // enforce double colon notation for applicable pseudo-elements
  'selector-root-no-composition': true, // disallow the composition of:root selectors

  //
  // Selector list
  // --------------------

  'selector-list-comma-newline-after': 'always-multi-line', // enforce a newline after , in multi-line selector lists
  'selector-list-comma-newline-before': 'never-multi-line', // disallow whitespace before , in multi-line selector lists
  'selector-list-comma-space-after': 'always-single-line', // enforce single space after , in single-line selector lists
  'selector-list-comma-space-before': 'never', // disallow whitespace before ,

  //
  // Rule
  // --------------------

  'rule-nested-empty-line-before': [
    'always', // enforce an empty line before nested rules
    {
      except: ['first-nested'], // reverse the primary option if the rule is the first in a block
      ignore: ['after-comment'] // ignore rules that come after a comment
    }
  ],
  'rule-no-duplicate-properties': true, // disallow duplicate properties within rules
  'rule-no-shorthand-property-overrides': true, // disallow shorthand properties that override related longhand props
  'rule-non-nested-empty-line-before': [
    'always', // require an empty line before non-nested rules
    {
      ignore: ['after-comment'] // ignore rules that come after a comment
    }
  ],
  'rule-properties-order': rulePropertiesOrder, // the order of properties within rules
  'rule-trailing-semicolon': 'always', // enforce a trailing semicolon within rules

  //
  // Root
  // --------------------

  'root-no-standard-properties': true, // disallow standard properties inside :root selectors

  //
  // Media feature
  // --------------------

  'media-feature-colon-space-after': 'always', // enforce a single space after the colon in media features
  'media-feature-colon-space-before': 'never', // disallow whitespace before the colon in media features
  'media-feature-name-no-vendor-prefix': true, // disallow vendor prefixes for media feature names
  'media-feature-range-operator-space-after': 'always', // enforce a single space after the range operator
  'media-feature-range-operator-space-before': 'always', // enforce a single space before the range operator

  //
  // Custom media
  // --------------------

  // 'custom-media-pattern': /foo-.+/, // pattern of custom media query names

  //
  // Media query
  // --------------------

  'media-query-parentheses-space-inside': 'never', // disallow whitespace on the inside of the parentheses

  //
  // Media query list
  // --------------------

  'media-query-list-comma-newline-after': 'always-multi-line', // enforce a newline after , in multi-line m.q. lists
  'media-query-list-comma-newline-before': 'never-multi-line', // disallow whitespace before , in multi-line m.q. lists
  'media-query-list-comma-space-after': 'always-single-line', // enforce single space after , in single-line m.q. lists
  'media-query-list-comma-space-before': 'never', // disallow whitespace before the commas of media query lists

  //
  // At rule
  // --------------------

  'at-rule-empty-line-before': [
    'always', // require an empty line before @rules
    {
      except: [
        'first-nested', // reverse the primary option for at-rules that are nested and the first child of their parent
        'blockless-group' // reverse the primary option for at-rules within a blockless group
      ],
      ignore: [
        'after-comment' // ignore rules that come after a comment
      ]
    }
  ],
  'at-rule-no-vendor-prefix': true, // disallow vendor prefixes for @rules

  //
  // Comment
  // --------------------

  'comment-empty-line-before': [
    'always', // require an empty line before comments
    {
      except: [
        'first-nested' // reverse the primary option for comments that are nested and the first child of their parent
      ],
      ignore: [
        'stylelint-commands' // ignore stylelint command comments, e.g. /* stylelint-disable color-no-hex */
      ]
    }
  ],
  'comment-whitespace-inside': 'always', // require a single space on the inside of comment markers

  //
  // General / Sheet
  // --------------------

  indentation: 2, // specify indentation
  'max-line-length': 120, // limit the length of a line
  'max-empty-lines': 2, // disallow more than a specified number of adjacent empty lines
  'no-eol-whitespace': true, // disallow end-of-line whitespace
  'no-missing-eof-newline': true // disallow missing end-of-file newline

};
