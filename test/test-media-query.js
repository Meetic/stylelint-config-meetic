import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good media query
// --------------------

test('good media query', async t => {
  t.plan(1);

  const lintResults = await fileLinter('media-query-good.css');

  t.false(lintResults.errored);
});

//
// Bad media query
// --------------------

test('bad media query – parentheses-space-inside', async t => {
  t.plan(1);

  const warningList = await warningFinder('media-query-bad.css', 3);
  const warning = warningList
    .find(warning => warning.rule === 'media-query-parentheses-space-inside');

  t.is(warning.severity, 'error');
});
