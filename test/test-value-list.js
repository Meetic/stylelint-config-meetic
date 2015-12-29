import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good value list
// --------------------

test('good value list', async t => {
  t.plan(1);

  const lintResults = await fileLinter('value-list-good.css');
  
  t.false(lintResults.errored);
});

//
// Bad value list
// --------------------

test('bad value list – comma newline after', async t => {
  t.plan(1);
  
  const warningList = await warningFinder('value-list-bad.css', 4);
  const warning = warningList.find(warning => warning.rule === 'value-list-comma-newline-after');

  t.is(warning.severity, 'error');
});

test('bad value list – comma newline before', async t => {
  t.plan(1);

  const warningList = await warningFinder('value-list-bad.css', 10);
  const warning = warningList.find(warning => warning.rule === 'value-list-comma-newline-before');

  t.is(warning.severity, 'error');
});

test('bad value list – comma space after', async t => {
  t.plan(1);

  const warningList = await warningFinder('value-list-bad.css', 14);
  const warning = warningList.find(warning => warning.rule === 'value-list-comma-space-after');

  t.is(warning.severity, 'error');
});

test('bad value list – comma space before', async t => {
  t.plan(1);

  const warningList = await warningFinder('value-list-bad.css', 18);
  const warning = warningList.find(warning => warning.rule === 'value-list-comma-space-before');

  t.is(warning.severity, 'error');
});
