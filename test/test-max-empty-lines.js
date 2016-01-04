import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good max empty lines
// --------------------

test('good max empty lines', async t => {
  t.plan(1);

  const lintResults = await fileLinter('max-empty-lines-good.css');

  t.false(lintResults.errored);
});

//
// Bad max empty lines
// --------------------

test('bad max empty lines – empty-line-before', async t => {
  t.plan(1);

  const lintResults = await fileLinter('max-empty-lines-bad.css');

  const warningList = await warningFinder('max-empty-lines-bad.css', 5);
  const warning = warningList.find(warning => warning.rule === 'max-empty-lines');

  t.is(warning.severity, 'error');
});
