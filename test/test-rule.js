import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good selector
// --------------------

test('good rule', async t => {
  t.plan(1);

  const lintResults = await fileLinter('rule-good.css');
  t.false(lintResults.errored);
});

//
// Bad rule
// --------------------

test('bad rule – nested-empty-line-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('rule-bad.css', 7);
  const warning = warningList
    .find(warning => warning.rule === 'rule-nested-empty-line-before');

  t.is(warning.severity, 'error');
});

test('bad rule – no-duplicate-properties', async t => {
  t.plan(1);

  const warningList = await warningFinder('rule-bad.css', 14);
  const warning = warningList
    .find(warning => warning.rule === 'rule-no-duplicate-properties');

  t.is(warning.severity, 'error');
});

test('bad rule – no-shorthand-property-overrides', async t => {
  t.plan(1);

  const warningList = await warningFinder('rule-bad.css', 19);
  const warning = warningList
    .find(warning => warning.rule === 'rule-no-shorthand-property-overrides');

  t.is(warning.severity, 'error');
});

test('bad rule – non-nested-empty-line-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('rule-bad.css', 25);
  const warning = warningList
    .find(warning => warning.rule === 'rule-non-nested-empty-line-before');

  t.is(warning.severity, 'error');
});

test('bad rule – properties-order', async t => {
  t.plan(1);

  const warningList = await warningFinder('rule-bad.css', 32);
  const warning = warningList
    .find(warning => warning.rule === 'rule-properties-order');

  t.is(warning.severity, 'error');
});

test('bad rule – trailing-semicolon', async t => {
  t.plan(1);

  const warningList = await warningFinder('rule-bad.css', 44);
  const warning = warningList
    .find(warning => warning.rule === 'rule-trailing-semicolon');

  t.is(warning.severity, 'error');
});
