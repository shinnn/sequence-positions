/*!
 * sequence-positions | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/sequence-positions
*/
import indexesOfSequence from 'indexes-of-sequence';

export default function sequencePositions(arr, searchValues, fromIndex) {
  var endPositionOffset = searchValues.length - 1;

  return indexesOfSequence(arr, searchValues, fromIndex).map(function(startPosition) {
    return {
      start: startPosition,
      end: startPosition + endPositionOffset
    };
  });
}
