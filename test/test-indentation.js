import test from 'ava';
import 'babel-core/register';
import stylelint from 'stylelint';

import stylelintConfigMeetic from '../src/index';

//
// Good indentation
// --------------------

test('good indentation', async t => {
  t.plan(1);

  const lintResults = await stylelint.lint({
    files: '../examples/indentation-good.css',
    config: stylelintConfigMeetic
  });

  t.false(lintResults.errored);
});

//
// Bad indentation
// --------------------

test('bad indentation', async t => {
  t.plan(6);

  const lintResults = await stylelint.lint({
    files: '../examples/indentation-bad.css',
    config: stylelintConfigMeetic
  });

  const warnings = lintResults
    .results
    .find(({source}) => source.includes('indentation-bad.css'))
    .warnings;

  warnings.forEach(({rule, severity}) => {
    t.is(rule, 'indentation');
    t.is(severity, 'error');
  });
});
