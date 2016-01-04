import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good comment
// --------------------

test('good comment', async t => {
  t.plan(1);

  const lintResults = await fileLinter('comment-good.css');

  t.false(lintResults.errored);
});

//
// Bad comment
// --------------------

test('bad comment – empty-line-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('comment-bad.css', 6);
  const warning = warningList.find(warning => warning.rule === 'comment-empty-line-before');

  t.is(warning.severity, 'error');
});

test('bad comment – empty-whitespace-inside', async t => {
  t.plan(1);

  const warningList = await warningFinder('comment-bad.css', 8);
  const warning = warningList.find(warning => warning.rule === 'comment-whitespace-inside');

  t.is(warning.severity, 'error');
});
