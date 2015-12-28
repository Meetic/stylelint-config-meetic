import test from 'ava';
import 'babel-core/register';
import stylelint from 'stylelint';

import stylelintConfigMeetic from '../src/index';

//
// Good
// --------------------

test('good number', async t => {
  t.plan(1);

  const lintResults = await stylelint.lint({
    files: '../examples/number-good.css',
    config: stylelintConfigMeetic
  });

  t.false(lintResults.errored);
});

//
// Bad
// --------------------

test('bad number – leading zero', async t => {
  t.plan(2);

  const lintResults = await stylelint.lint({
    files: '../examples/number-bad.css',
    config: stylelintConfigMeetic
  });

  const warning = lintResults
    .results
    .find(({source}) => source.includes('number-bad.css'))
    .warnings[0];

  t.is(warning.rule, 'number-leading-zero');
  t.is(warning.severity, 'error');
});

test('bad number – max precision', async t => {
  t.plan(2);

  const lintResults = await stylelint.lint({
    files: '../examples/number-bad.css',
    config: stylelintConfigMeetic
  });

  const warning = lintResults
    .results
    .find(({source}) => source.includes('number-bad.css'))
    .warnings[1];

  t.is(warning.rule, 'number-max-precision');
  t.is(warning.severity, 'error');
});

test('bad number – trailing zero', async t => {
  t.plan(2);

  const lintResults = await stylelint.lint({
    files: '../examples/number-bad.css',
    config: stylelintConfigMeetic
  });

  const warning = lintResults
    .results
    .find(({source}) => source.includes('number-bad.css'))
    .warnings[2];

  t.is(warning.rule, 'number-no-trailing-zeros');
  t.is(warning.severity, 'error');
});

test('bad number – zero length unit', async t => {
  t.plan(2);

  const lintResults = await stylelint.lint({
    files: '../examples/number-bad.css',
    config: stylelintConfigMeetic
  });

  const warning = lintResults
    .results
    .find(({source}) => source.includes('number-bad.css'))
    .warnings[3];

  t.is(warning.rule, 'number-zero-length-no-unit');
  t.is(warning.severity, 'error');
});
