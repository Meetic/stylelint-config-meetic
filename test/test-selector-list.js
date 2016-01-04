import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good selector list
// --------------------

test('good selector list', async t => {
  t.plan(1);

  const lintResults = await fileLinter('selector-list-good.css');

  t.false(lintResults.errored);
});

//
// Bad selector list
// --------------------

test('bad selector list – comma-newline-after', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-list-bad.css', 5);
  const warning = warningList.find(warning => warning.rule === 'selector-list-comma-newline-after');

  t.is(warning.severity, 'error');
});

test('bad selector list – comma-newline-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-list-bad.css', 10);
  const warning = warningList.find(warning => warning.rule === 'selector-list-comma-newline-before');

  t.is(warning.severity, 'error');
});

test('bad selector list – comma-space-after', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-list-bad.css', 16);
  const warning = warningList.find(warning => warning.rule === 'selector-list-comma-space-after');

  t.is(warning.severity, 'error');
});

test('bad selector list – comma-space-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('selector-list-bad.css', 21);
  const warning = warningList.find(warning => warning.rule === 'selector-list-comma-space-before');

  t.is(warning.severity, 'error');
});
