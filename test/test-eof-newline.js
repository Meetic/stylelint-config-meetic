import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good at-rule
// --------------------

test('good eof-newline', async t => {
  t.plan(1);

  const lintResults = await fileLinter('eof-newline-good.css');

  t.false(lintResults.errored);
});

//
// Bad eof-newline
// --------------------

test('bad eof-newline – no-missing-eof-newline', async t => {
  t.plan(1);

  const warningList = await warningFinder('eof-newline-bad.css', 4);
  const warning = warningList.find(warning => warning.rule === 'no-missing-eof-newline');

  t.is(warning.severity, 'error');
});
