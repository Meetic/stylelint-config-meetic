import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good number
// --------------------

test('good number', async t => {
  t.plan(1);

  const lintResults = await fileLinter('number-good.css');

  t.false(lintResults.errored);
});

//
// Bad number
// --------------------

test('bad number – leading zero', async t => {
  t.plan(1);

  const warningList = await warningFinder('number-bad.css', 4);
  const warning = warningList.find(warning => warning.rule === 'number-leading-zero');

  t.is(warning.severity, 'error');
});

test('bad number – max precision', async t => {
  t.plan(1);

  const warningList = await warningFinder('number-bad.css', 8);
  const warning = warningList.find(warning => warning.rule === 'number-max-precision');

  t.is(warning.severity, 'error');
});

test('bad number – trailing zero', async t => {
  t.plan(1);

  const warningList = await warningFinder('number-bad.css', 12);
  const warning = warningList.find(warning => warning.rule === 'number-no-trailing-zeros');

  t.is(warning.severity, 'error');
});

test('bad number – zero length unit', async t => {
  t.plan(1);

  const warningList = await warningFinder('number-bad.css', 16);
  const warning = warningList.find(warning => warning.rule === 'number-zero-length-no-unit');

  t.is(warning.severity, 'error');
});
