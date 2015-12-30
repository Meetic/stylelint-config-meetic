import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good selector
// --------------------

test('good selector', async t => {
  t.plan(1);

  const lintResults = await fileLinter('selector-good.css');
  t.false(lintResults.errored);
});

//
// Bad selector
// --------------------

test('bad selector – no-single-line', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-bad.css', 4);
  const warning = warningList.find(warning => warning.rule === 'selector-combinator-space-after');

  t.is(warning.severity, 'error');
});

test('bad selector – combinator-space-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-bad.css', 9);
  const warning = warningList.find(warning => warning.rule === 'selector-combinator-space-before');

  t.is(warning.severity, 'error');
});

test('bad selector block –no-attribute', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-bad.css', 14);
  const warning = warningList.find(warning => warning.rule === 'selector-no-attribute');

  t.is(warning.severity, 'error');
});

test('bad selector – no-combinator', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-bad.css', 19);
  const warning = warningList.find(warning => warning.rule === 'selector-no-combinator');

  t.is(warning.severity, 'error');
});

test('bad selector – no-id', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-bad.css', 26);
  const warning = warningList.find(warning => warning.rule === 'selector-no-id');

  t.is(warning.severity, 'error');
});

test('bad selector – no-type', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-bad.css', 31);
  const warning = warningList.find(warning => warning.rule === 'selector-no-type');

  t.is(warning.severity, 'error');
});

test('bad selector – no-universal', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-bad.css', 36);
  const warning = warningList.find(warning => warning.rule === 'selector-no-universal');

  t.is(warning.severity, 'error');
});

test('bad selector – no-vendor-prefix', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-bad.css', 43);
  const warning = warningList.find(warning => warning.rule === 'selector-no-vendor-prefix');

  t.is(warning.severity, 'error');
});

test('bad selector – pseudo-element-colon-notation', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-bad.css', 50);
  const warning = warningList.find(warning => warning.rule === 'selector-pseudo-element-colon-notation');

  t.is(warning.severity, 'error');
});

test('bad selector – root-no-composition', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-bad.css', 57);
  const warning = warningList.find(warning => warning.rule === 'selector-root-no-composition');

  t.is(warning.severity, 'error');
});
