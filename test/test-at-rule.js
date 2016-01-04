import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good at-rule
// --------------------

test('good at-rule', async t => {
  t.plan(1);

  const lintResults = await fileLinter('at-rule-good.css');

  t.false(lintResults.errored);
});

//
// Bad at-rule
// --------------------

test('bad at-rule – empty-line-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('at-rule-bad.css', 4);
  const warning = warningList.find(warning => warning.rule === 'at-rule-empty-line-before');

  t.is(warning.severity, 'error');
});

test('bad at-rule – no-vendor-prefix', async t => {
  t.plan(1);

  const warningList = await warningFinder('at-rule-bad.css', 6);
  const warning = warningList.find(warning => warning.rule === 'at-rule-no-vendor-prefix');

  t.is(warning.severity, 'error');
});
