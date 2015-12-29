import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good indentation
// --------------------

test('good indentation', async t => {
  t.plan(1);

  const lintResults = await fileLinter('indentation-good.css');

  t.false(lintResults.errored);
});

//
// Bad indentation
// --------------------

test('bad indentation – no indentation', async t => {
  t.plan(1);

  const warningList = await warningFinder('indentation-bad.css', 4);
  const warning = warningList.find(warning => warning.rule === 'indentation');

  t.is(warning.severity, 'error');
});

test('bad indentation – 3 spaces', async t => {
  t.plan(1);

  const warningList = await warningFinder('indentation-bad.css', 8);
  const warning = warningList.find(warning => warning.rule === 'indentation');

  t.is(warning.severity, 'error');
});

test('bad indentation – no indentation', async t => {
  t.plan(1);

  const warningList = await warningFinder('indentation-bad.css', 4);
  const warning = warningList.find(warning => warning.rule === 'indentation');

  t.is(warning.severity, 'error');
});

test('bad indentation – 4 spaces', async t => {
  t.plan(1);

  const warningList = await warningFinder('indentation-bad.css', 12);
  const warning = warningList.find(warning => warning.rule === 'indentation');

  t.is(warning.severity, 'error');
});
