import test from 'ava';
import 'babel-core/register';
import stylelint from 'stylelint';

import stylelintConfigMeetic from '../src/index';

//
// Good
// --------------------

test('good color', async t => {
  t.plan(1);

  const lintResults = await stylelint.lint({
    files: '../examples/color-good.css',
    config: stylelintConfigMeetic
  });

  t.false(lintResults.errored);
});

//
// Bad
// --------------------

test('bad color – hex case', async t => {
  t.plan(2);

  const lintResults = await stylelint.lint({
    files: '../examples/color-bad.css',
    config: stylelintConfigMeetic
  });

  const warning = lintResults
    .results
    .find(({source}) => source.includes('color-bad.css'))
    .warnings[0];

  t.is(warning.rule, 'color-hex-case');
  t.is(warning.severity, 'error');
});

test('bad color – hex length', async t => {
  t.plan(2);

  const lintResults = await stylelint.lint({
    files: '../examples/color-bad.css',
    config: stylelintConfigMeetic
  });

  const warning = lintResults
    .results
    .find(({source}) => source.includes('color-bad.css'))
    .warnings[1];

  t.is(warning.rule, 'color-hex-length');
  t.is(warning.severity, 'error');
});

test('bad color – invalid hex', async t => {
  t.plan(2);

  const lintResults = await stylelint.lint({
    files: '../examples/color-bad.css',
    config: stylelintConfigMeetic
  });

  const warning = lintResults
    .results
    .find(({source}) => source.includes('color-bad.css'))
    .warnings[2];

  t.is(warning.rule, 'color-no-invalid-hex');
  t.is(warning.severity, 'error');
});

test('bad color – named colors', async t => {
  t.plan(2);

  const lintResults = await stylelint.lint({
    files: '../examples/color-bad.css',
    config: stylelintConfigMeetic
  });

  const warning = lintResults
    .results
    .find(({source}) => source.includes('color-bad.css'))
    .warnings[3];

  t.is(warning.rule, 'color-no-named');
  t.is(warning.severity, 'error');
});
