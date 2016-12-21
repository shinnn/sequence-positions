'use strict';

var indexesOfSequence = require('indexes-of-sequence');

/*!
 * sequence-positions | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/sequence-positions
*/
function sequencePositions(arr, searchValues, fromIndex) {
  var endPositionOffset = searchValues.length - 1;

  return indexesOfSequence(arr, searchValues, fromIndex).map(function(startPosition) {
    return {
      start: startPosition,
      end: startPosition + endPositionOffset
    };
  });
}

module.exports = sequencePositions;
