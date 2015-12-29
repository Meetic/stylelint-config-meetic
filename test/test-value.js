import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good value
// --------------------

test('good value', async t => {
  t.plan(1);

  const lintResults = await fileLinter('value-good.css');

  t.false(lintResults.errored);
});

//
// Bad value
// --------------------

test('bad value', async t => {
  t.plan(1);

  const warningList = await warningFinder('value-bad.css', 2);
  const warning = warningList.find(warning => warning.rule === 'value-no-vendor-prefix');

  t.is(warning.severity, 'error');
});
