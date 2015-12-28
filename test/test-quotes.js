import test from 'ava';
import 'babel-core/register';
import stylelint from 'stylelint';

import stylelintConfigMeetic from '../src/index';

test('good quotes', async t => {
  t.plan(1);

  const lintResults = await stylelint.lint({
    files: '../examples/quotes-good.css',
    config: stylelintConfigMeetic
  });

  t.is(lintResults.errored, false);
});

test('bad quotes', async t => {
  t.plan(4);

  const lintResults = await stylelint.lint({
    files: '../examples/quotes-bad.css',
    config: stylelintConfigMeetic
  });

  const warnings = lintResults
    .results
    .find(({source}) => source.includes('quotes-bad.css'))
    .warnings;

  warnings.forEach(({rule, severity}) => {
    t.is(rule, 'string-quotes');
    t.is(severity, 'error');
  });
});
