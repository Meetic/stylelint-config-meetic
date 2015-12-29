import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good declaration
// --------------------

test('good declaration', async t => {
  t.plan(1);

  const lintResults = await fileLinter('declaration-good.css');
  
  t.false(lintResults.errored);
});

//
// Bad declaration
// --------------------

test('bad declaration – bang-space-after', async t => {
  t.plan(1);

  const warningList = await warningFinder('declaration-bad.css', 3);
  const warning = warningList.find(warning => warning.rule === 'declaration-bang-space-after');

  t.is(warning.severity, 'error');
});

test('bad declaration – bang-space-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('declaration-bad.css', 8);
  const warning = warningList.find(warning => warning.rule === 'declaration-bang-space-before');

  t.is(warning.severity, 'error');
});

test('bad declaration – colon-newline-after', async t => {
  t.plan(1);

  const warningList = await warningFinder('declaration-bad.css', 13);
  const warning = warningList.find(warning => warning.rule === 'declaration-colon-newline-after');

  t.is(warning.severity, 'error');
});

test('bad declaration – colon-space-after', async t => {
  t.plan(1);

  const warningList = await warningFinder('declaration-bad.css', 19);
  const warning = warningList.find(warning => warning.rule === 'declaration-colon-space-after');

  t.is(warning.severity, 'error');
});

test('bad declaration – colon-space-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('declaration-bad.css', 25);
  const warning = warningList.find(warning => warning.rule === 'declaration-colon-space-before');

  t.is(warning.severity, 'error');
});

test('bad declaration – no-important', async t => {
  t.plan(1);

  const warningList = await warningFinder('declaration-bad.css', 30);
  const warning = warningList.find(warning => warning.rule === 'declaration-no-important');

  t.is(warning.severity, 'error');
});
