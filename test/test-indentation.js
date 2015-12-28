import test from 'ava';
import 'babel-core/register';
import stylelint from 'stylelint';

import stylelintConfigMeetic from '../src/index';

test('good indentation', async t => {
  t.plan(1);

  const lintResults = await stylelint.lint({
    files: '../examples/indentation-good.css',
    config: stylelintConfigMeetic
  });

  t.is(lintResults.errored, false);
});

test('bad indentation', async t => {
  t.plan(6);

  const lintResults = await stylelint.lint({
    files: '../examples/indentation-bad.css',
    config: stylelintConfigMeetic
  });

  const warnings = lintResults.results.filter(({source}) => {
    return source.includes('indentation-bad.css');
  })[0].warnings;

  warnings.forEach(({rule, severity}) => {
    t.is(rule, 'indentation');
    t.is(severity, 'error');
  });
});
