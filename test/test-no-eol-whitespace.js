import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good media query list
// --------------------

test('good no eol whitespace', async t => {
  t.plan(1);

  const lintResults = await fileLinter('no-eol-whitespace-good.css');

  t.false(lintResults.errored);
});

//
// Bad no eol whitespace
// --------------------

test('bad no eol whitespace – colon-space-after', async t => {
  t.plan(1);

  const warningList = await warningFinder('no-eol-whitespace-bad.css', 4);
  const warning = warningList
    .find(warning => warning.rule === 'no-eol-whitespace');

  t.is(warning.severity, 'error');
});
