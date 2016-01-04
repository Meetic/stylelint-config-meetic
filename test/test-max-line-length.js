import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good max line length
// --------------------

test('good max line length', async t => {
  t.plan(1);

  const lintResults = await fileLinter('max-line-length-good.css');

  t.false(lintResults.errored);
});

//
// Bad max line length
// --------------------

test('bad max line length', async t => {
  t.plan(1);

  const warningList = await warningFinder('max-line-length-bad.css', 3);
  const warning = warningList.find(warning => warning.rule === 'max-line-length');

  t.is(warning.severity, 'error');
});
