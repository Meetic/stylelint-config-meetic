import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good root
// --------------------

test('good root', async t => {
  t.plan(1);

  const lintResults = await fileLinter('root-good.css');

  t.false(lintResults.errored);
});

//
// Bad root
// --------------------

test('bad root – no-standard-properties', async t => {
  t.plan(1);

  const warningList = await warningFinder('root-bad.css', 4);
  const warning = warningList
    .find(warning => warning.rule === 'root-no-standard-properties');

  t.is(warning.severity, 'error');
});
