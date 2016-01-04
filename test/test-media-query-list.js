import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good media query list
// --------------------

test('good media query list', async t => {
  t.plan(1);

  const lintResults = await fileLinter('media-query-list-good.css');

  t.false(lintResults.errored);
});

//
// Bad media query list
// --------------------

test('bad media query list – comma-newline-after', async t => {
  t.plan(1);

  const warningList = await warningFinder('media-query-list-bad.css', 4);
  const warning = warningList
    .find(warning => warning.rule === 'media-query-list-comma-newline-after');

  t.is(warning.severity, 'error');
});

test('bad media query list – comma-newline-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('media-query-list-bad.css', 11);
  const warning = warningList
    .find(warning => warning.rule === 'media-query-list-comma-newline-before');

  t.is(warning.severity, 'error');
});

test('bad media query list – list-comma-space-after', async t => {
  t.plan(1);

  const warningList = await warningFinder('media-query-list-bad.css', 18);
  const warning = warningList
    .find(warning => warning.rule === 'media-query-list-comma-space-after');

  t.is(warning.severity, 'error');
});

test('bad media query list – list-comma-space-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('media-query-list-bad.css', 33);
  const warning = warningList
    .find(warning => warning.rule === 'media-query-list-comma-space-before');

  t.is(warning.severity, 'error');
});
