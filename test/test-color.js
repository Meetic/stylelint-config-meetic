import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good color
// --------------------

test('good color', async t => {
  t.plan(1);

  const lintResults = await fileLinter('color-good.css');

  t.false(lintResults.errored);
});

//
// Bad color
// --------------------

test('bad color – hex case', async t => {
  t.plan(1);

  const warningList = await warningFinder('color-bad.css', 4);
  const warning = warningList.find(warning => warning.rule === 'color-hex-case');

  t.is(warning.severity, 'error');
});

test('bad color – hex length', async t => {
  t.plan(1);

  const warningList = await warningFinder('color-bad.css', 8);
  const warning = warningList.find(warning => warning.rule === 'color-hex-length');

  t.is(warning.severity, 'error');
});

test('bad color – invalid hex', async t => {
  t.plan(1);

  const warningList = await warningFinder('color-bad.css', 12);
  const warning = warningList.find(warning => warning.rule === 'color-no-invalid-hex');

  t.is(warning.severity, 'error');
});

test('bad color – named colors', async t => {
  t.plan(1);

  const warningList = await warningFinder('color-bad.css', 16);
  const warning = warningList.find(warning => warning.rule === 'color-no-named');

  t.is(warning.severity, 'error');
});
