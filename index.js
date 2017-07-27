'use strict';

var indexesOfSequence = require('indexes-of-sequence');

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
