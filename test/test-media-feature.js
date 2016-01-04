import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good media query list
// --------------------

test('good media feature', async t => {
  t.plan(1);

  const lintResults = await fileLinter('media-feature-good.css');

  t.false(lintResults.errored);
});

//
// Bad media feature
// --------------------

test('bad media feature – colon-space-after', async t => {
  t.plan(1);

  const warningList = await warningFinder('media-feature-bad.css', 4);
  const warning = warningList
    .find(warning => warning.rule === 'media-feature-colon-space-after');

  t.is(warning.severity, 'error');
});

test('bad media feature – colon-space-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('media-feature-bad.css', 11);
  const warning = warningList
    .find(warning => warning.rule === 'media-feature-colon-space-before');

  t.is(warning.severity, 'error');
});

test('bad media feature – name-no-vendor-prefix', async t => {
  t.plan(1);

  const warningList = await warningFinder('media-feature-bad.css', 18);
  const warning = warningList
    .find(warning => warning.rule === 'media-feature-name-no-vendor-prefix');

  t.is(warning.severity, 'error');
});

test('bad media feature – range-operator-space-after', async t => {
  t.plan(1);

  const warningList = await warningFinder('media-feature-bad.css', 25);
  const warning = warningList
    .find(warning => warning.rule === 'media-feature-range-operator-space-after');

  t.is(warning.severity, 'error');
});

test('bad media feature – range-operator-space-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('media-feature-bad.css', 32);
  const warning = warningList
    .find(warning => warning.rule === 'media-feature-range-operator-space-before');

  t.is(warning.severity, 'error');
});
