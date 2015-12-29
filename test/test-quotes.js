import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good quotes
// --------------------

test('good quotes', async t => {
  t.plan(1);

  const lintResults = await fileLinter('quotes-good.css');

  t.false(lintResults.errored);
});

//
// Bad quotes
// --------------------

test('bad quotes – @import statements', async t => {
  t.plan(1);

  const warningList = await warningFinder('quotes-bad.css', 3);
  const warning = warningList.find(warning => warning.rule === 'string-quotes');

  t.is(warning.severity, 'error');
});

test('bad quotes – content', async t => {
  t.plan(1);

  const warningList = await warningFinder('quotes-bad.css', 6);
  const warning = warningList.find(warning => warning.rule === 'string-quotes');

  t.is(warning.severity, 'error');
});
