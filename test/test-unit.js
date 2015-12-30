import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good unit
// --------------------

test('good unit', async t => {
  t.plan(1);

  const lintResults = await fileLinter('unit-good.css');

  t.false(lintResults.errored);
});

//
// Bad unit
// --------------------

test('bad unit – in', async t => {
  t.plan(1);

  const warningList = await warningFinder('unit-bad.css', 4);
  const warning = warningList.find(warning => warning.rule === 'unit-blacklist');

  t.is(warning.severity, 'error');
});

test('bad unit – em', async t => {
  t.plan(1);

  const warningList = await warningFinder('unit-bad.css', 5);
  const warning = warningList.find(warning => warning.rule === 'unit-blacklist');

  t.is(warning.severity, 'error');
});

test('bad unit – cm', async t => {
  t.plan(1);

  const warningList = await warningFinder('unit-bad.css', 6);
  const warning = warningList.find(warning => warning.rule === 'unit-blacklist');

  t.is(warning.severity, 'error');
});

test('bad unit – mm', async t => {
  t.plan(1);

  const warningList = await warningFinder('unit-bad.css', 7);
  const warning = warningList.find(warning => warning.rule === 'unit-blacklist');

  t.is(warning.severity, 'error');
});
