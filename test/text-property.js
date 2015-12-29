import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good property
// --------------------

test('good property', async t => {
  t.plan(1);

  const lintResults = await fileLinter('property-good.css');

  t.false(lintResults.errored);
});

//
// Bad property
// --------------------

test('bad property', async t => {
  t.plan(1);

  const warningList = await warningFinder('property-bad.css', 3);
  const warning = warningList.find(warning => warning.rule === 'property-no-vendor-prefix');

  t.is(warning.severity, 'error');
});
