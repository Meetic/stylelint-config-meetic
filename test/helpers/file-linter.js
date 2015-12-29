import 'babel-core/register';
import stylelint from 'stylelint';

import stylelintConfigMeetic from '../../src/index';

/**
 * Lints an example file with the given name and existing config.
 * @param  {String}  fileName Name of the example file to lint.
 * @return {Promise}          Resolved with lint results.
 */
export default function fileLinter(fileName) {
  return stylelint.lint({
    files: `../examples/${fileName}`,
    config: stylelintConfigMeetic
  });
}
