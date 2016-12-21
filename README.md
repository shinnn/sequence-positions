# sequence-positions

[![NPM version](https://img.shields.io/npm/v/sequence-positions.svg)](https://www.npmjs.com/package/sequence-positions)
[![Bower version](https://img.shields.io/bower/v/sequence-positions.svg)](https://github.com/shinnn/sequence-positions/releases)
[![Build Status](https://travis-ci.org/shinnn/sequence-positions.svg?branch=master)](https://travis-ci.org/shinnn/sequence-positions)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/sequence-positions.svg)](https://coveralls.io/r/shinnn/sequence-positions)

Resolve all start/end positions at which a given sequence of elements can be found in the array

```javascript
import sequencePositions from 'sequence-positions';

sequencePositions(['a', 'b', 'a', 'b', 'c', 'd', 'a', 'b', 'c'], ['a', 'b', 'c']);
//=> [{start: 2, end: 4}, {start: 6, end: 8}]
```

|index  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|:------|---|---|---|---|---|---|---|---|---|
|array  | a | b | a | b | c | d | a | b | c |
|matched|   |   | ○ | ○ | ○ |   | ○ | ○ | ○ |

## Installation

### [npm](https://www.npmjs.com/)

```
npm install sequence-positions
```

### [bower](https://bower.io/)

```
bower install sequence-positions
```

## API

### sequencePositions(*array*, *searchArray* [, *fromIndex*])

*array*: `Array`  
*searchArray*: `Array` (the sequence of values to search for)  
*fromIndex*: `Number` (index in the array where to begin searching)  
Return: `Array` of objects with `start` and `end` properties

```javascript
indexOfSequence([1, '1', true, '1', 1, Buffer.from('1'), '1', 1, '1'], [1, '1']);
//=> [{start: 0, end: 1}, {start: 7, end: 8}]
indexOfSequence([1, '1', true, '1', 1, Buffer.from('1'), '1', 1, '1'], [1, '1'], 1);
//=> [{start: 7, end: 8}]

indexOfSequence(['a'], ['b']); //=> []
indexOfSequence(['a'], []); //=> []
indexOfSequence([], ['b']); //=> []
```

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).
