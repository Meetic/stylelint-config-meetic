/**
 * Rule properties order
 * @see http://stylelint.io/?/src/rules/rule-properties-order/README.md
 * @see https://github.com/brandon-rhodes/Concentric-CSS
 * @type Array<String>
 */
export default [

  //
  // Directions about where and how the box is placed
  // --------------------

  'display',
  'position',
  'top',
  'right',
  'bottom',
  'left',

  'float',
  'clear',

  //
  // Can the box be seen?
  // --------------------

  'visibility',
  'opacity',
  'z-index',

  //
  // Layers of the box model, from outside to inside
  // --------------------

  'margin',
  'margin-top',
  'margin-right',
  'margin-bottom',
  'margin-left',

  'outline',

  'border',
  'border-top',
  'border-right',
  'border-bottom',
  'border-left',

  'border-width',
  'border-top-width',
  'border-right-width',
  'border-bottom-width',
  'border-left-width',

  'border-style',
  'border-top-style',
  'border-right-style',
  'border-bottom-style',
  'border-left-style',

  'border-color',
  'border-top-color',
  'border-right-color',
  'border-bottom-color',
  'border-left-color',

  'background',
  'background-color',
  'background-image',
  'background-repeat',
  'background-position',
  'cursor',

  'padding',
  'padding-top',
  'padding-right',
  'padding-bottom',
  'padding-left',

  //
  // Content dimensions and scrollbars
  // --------------------

  'width',
  'min-width',
  'max-width',

  'height',
  'min-height',
  'max-height',

  'overflow',

  'list-style',
  'caption-side',

  'table-layout',
  'border-collapse',
  'border-spacing',
  'empty-cells',

  'vertical-align',

  'text-align',
  'text-indent',
  'text-transform',
  'text-decoration',

  'line-height',
  'word-spacing',
  'letter-spacing',
  'white-space',

  //
  // Textual content
  // --------------------

  'color',

  'font',
  'font-family',
  'font-size',
  'font-weight',

  'content',
  'quotes'

];
