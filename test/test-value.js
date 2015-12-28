import test from 'ava';
import 'babel-core/register';
import stylelint from 'stylelint';

import stylelintConfigMeetic from '../src/index';

//
// Good value
// --------------------

test('good value', async t => {
  t.plan(1);

  const lintResults = await stylelint.lint({
    files: '../examples/value-good.css',
    config: stylelintConfigMeetic
  });
  t.false(lintResults.errored);
});

//
// Bad value
// --------------------

test('bad value', async t => {
  t.plan(2);

  const lintResults = await stylelint.lint({
    files: '../examples/value-bad.css',
    config: stylelintConfigMeetic
  });

  const warnings = lintResults
    .results
    .find(({source}) => source.includes('value-bad.css'))
    .warnings[0];

    t.is(warnings.rule, 'value-no-vendor-prefix');
    t.is(warnings.severity, 'error');
});
