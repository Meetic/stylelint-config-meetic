import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good function
// --------------------

test('good function', async t => {
  t.plan(1);

  const lintResults = await fileLinter('function-good.css');

  t.false(lintResults.errored);
});

//
// Bad function
// --------------------

test('bad function – function calc unspaced operator', async t => {
  t.plan(1);

  const warningList = await warningFinder('function-bad.css', 4);
  const warning = warningList.find(warning => warning.rule === 'function-calc-no-unspaced-operator');

  t.is(warning.severity, 'error');
});

test('bad function – newline before comma', async t => {
  t.plan(1);

  const warningList = await warningFinder('function-bad.css', 9);
  const warning = warningList.find(warning => warning.rule === 'function-comma-newline-before');

  t.is(warning.severity, 'error');
});

test('bad function – space inside parentheses', async t => {
  t.plan(1);

  const warningList = await warningFinder('function-bad.css', 13);
  const warning = warningList.find(warning => warning.rule === 'function-parentheses-space-inside');

  t.is(warning.severity, 'error');
});

test('bad function – no space between functions', async t => {
  t.plan(1);

  const warningList = await warningFinder('function-bad.css', 17);
  const warning = warningList.find(warning => warning.rule === 'function-whitespace-after');

  t.is(warning.severity, 'error');
});

test('bad function – nonstandard linear gradient', async t => {
  t.plan(1);

  const warningList = await warningFinder('function-bad.css', 21);
  const warning = warningList.find(warning => warning.rule === 'function-linear-gradient-no-nonstandard-direction');

  t.is(warning.severity, 'error');
});

test('bad function – double quotes in url function', async t => {
  t.plan(1);

  const warningList = await warningFinder('function-bad.css', 25);
  const warning = warningList.find(warning => warning.rule === 'function-url-quotes');

  t.is(warning.severity, 'error');
});
