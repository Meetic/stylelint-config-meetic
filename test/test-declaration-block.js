import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good declaration block
// --------------------

test('good declaration block', async t => {
  t.plan(1);

  const lintResults = await fileLinter('declaration-block-good.css');

  t.false(lintResults.errored);
});

//
// Bad declaration block
// --------------------

test('bad declaration block – no-single-line', async t => {
  t.plan(1);

  const warningList = await warningFinder('declaration-block-bad.css', 2);
  const warning = warningList.find(warning => warning.rule === 'declaration-block-no-single-line');

  t.is(warning.severity, 'error');
});

test('bad declaration block – semicolon-newline-after', async t => {
  t.plan(1);

  const warningList = await warningFinder('declaration-block-bad.css', 5);
  const warning = warningList.find(warning => warning.rule === 'declaration-block-semicolon-newline-after');

  t.is(warning.severity, 'error');
});

test('bad declaration block – semicolon-newline-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('declaration-block-bad.css', 10);
  const warning = warningList.find(warning => warning.rule === 'declaration-block-semicolon-newline-before');

  t.is(warning.severity, 'error');
});

test('bad declaration block – semicolon-space-after', async t => {
  t.plan(1);

  const warningList = await warningFinder('declaration-block-bad.css', 14);
  const warning = warningList.find(warning => warning.rule === 'declaration-block-semicolon-space-after');

  t.is(warning.severity, 'error');
});

test('bad declaration block – semicolon-space-before', async t => {
  t.plan(1);

  const warningList = await warningFinder('declaration-block-bad.css', 18);
  const warning = warningList.find(warning => warning.rule === 'declaration-block-semicolon-space-before');

  t.is(warning.severity, 'error');
});

test('bad declaration block – single-line-max-declarations', async t => {
  t.plan(1);

  const warningList = await warningFinder('declaration-block-bad.css', 22);
  const warning = warningList.find(warning => warning.rule === 'declaration-block-single-line-max-declarations');

  t.is(warning.severity, 'error');
});
