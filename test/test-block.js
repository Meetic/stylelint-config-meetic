import test from 'ava';
import 'babel-core/register';

import fileLinter from './helpers/file-linter';
import warningFinder from './helpers/warning-finder';

//
// Good block
// --------------------

test('good block', async t => {
  t.plan(1);

  const lintResults = await fileLinter('block-good.css');

  t.false(lintResults.errored);
});

//
// Bad block
// --------------------

test('bad block – absence of newline after }', async t => {
  t.plan(1);

  const warningList = await warningFinder('block-bad.css', 6);
  const warning = warningList.find(warning => warning.rule === 'block-closing-brace-newline-after');

  t.is(warning.severity, 'error');
});

test('bad block – absence of newline before }', async t => {
  t.plan(1);

  const warningList = await warningFinder('block-bad.css', 12);
  const warning = warningList.find(warning => warning.rule === 'block-closing-brace-newline-before');

  t.is(warning.severity, 'error');
});

test('bad block – absence of space after } on single line', async t => {
  t.plan(1);

  const warningList = await warningFinder('block-bad.css', 15);
  const warning = warningList.find(warning => warning.rule === 'block-closing-brace-space-after');

  t.is(warning.severity, 'error');
});

test('bad block – absence of space before } on single line', async t => {
  t.plan(1);

  const warningList = await warningFinder('block-bad.css', 18);
  const warning = warningList.find(warning => warning.rule === 'block-closing-brace-space-before');

  t.is(warning.severity, 'error');
});

test('bad block – empty block', async t => {
  t.plan(1);

  const warningList = await warningFinder('block-bad.css', 21);
  const warning = warningList.find(warning => warning.rule === 'block-no-empty');

  t.is(warning.severity, 'error');
});

test('bad block – absence of newline after { in multi-line blocks', async t => {
  t.plan(1);

  const warningList = await warningFinder('block-bad.css', 24);
  const warning = warningList.find(warning => warning.rule === 'block-opening-brace-newline-after');

  t.is(warning.severity, 'error');
});

test('bad block – absence of space after { in single-line blocks', async t => {
  t.plan(1);

  const warningList = await warningFinder('block-bad.css', 29);
  const warning = warningList.find(warning => warning.rule === 'block-opening-brace-space-after');

  t.is(warning.severity, 'error');
});

test('bad block – absence of space before {', async t => {
  t.plan(1);

  const warningList = await warningFinder('block-bad.css', 29);
  const warning = warningList.find(warning => warning.rule === 'block-opening-brace-space-before');

  t.is(warning.severity, 'error');
});
