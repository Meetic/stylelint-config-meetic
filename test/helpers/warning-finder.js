import 'babel-core/register';
import fileLinter from './file-linter';

/**
 * Finds a list of warnings on a given line of a given example file.
 * @param  {String} fileName Name of the example file to lint.
 * @param  {Number} fileLine Line of the example file.
 * @return {Array}           List of warnings.
 */
export default function warningFinder(fileName, fileLine) {
  return fileLinter(fileName)
    .then(lintResults => {
      return lintResults
        .results
        .find(({source}) => source.includes(fileName))
        .warnings
        .filter(({line}) => line === fileLine);
    });
}
