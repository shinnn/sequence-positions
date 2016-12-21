'use strict';

const sequencePositions = require('.');
const test = require('tape');

test('sequencePositions()', t => {
  const arr = ['a', 'b', 'c', 'b', 'c'];
  const searches = ['b', 'c'];

  t.deepEqual(
    sequencePositions(arr, searches),
    [{start: 1, end: 2}, {start: 3, end: 4}],
    'should return all start/end positions of the search sequence.'
  );

  t.deepEqual(
    arr,
    ['a', 'b', 'c', 'b', 'c'],
    'should not mutate the array passed to the first parameter.'
  );

  t.deepEqual(
    searches,
    ['b', 'c'],
    'should not mutate the array passed to the first parameter.'
  );

  t.deepEqual(
    sequencePositions([1, 3, '1', '3', 1, 1, 3], [1, 3], 1),
    [{start: 5, end: 6}],
    'should support the third `fromIndex` parameter.'
  );

  t.deepEqual(
    sequencePositions(['foo', 'bar'], ['bar'], -9999),
    [{start: 1, end: 1}],
    'should treat negative `fromIndex` as 0.'
  );

  t.deepEqual(
    sequencePositions(['Hello', 'world'], ['Hello', Buffer.from('world')]),
    [],
    'should return an empty array when the it cannot find the sequence anywhere.'
  );

  t.deepEqual(
    sequencePositions([], ['p']),
    [],
    'should return an empty array when the first argument is an empty array.'
  );

  t.deepEqual(
    sequencePositions(['q'], []),
    [],
    'should return an empty when the second argument is an empty array.'
  );

  t.throws(
    () => sequencePositions(1, ['a']),
    /^TypeError.*Expected an array, but got 1 \(number\)\./,
    'should throw a type error when the first argument is a non-array value.'
  );

  t.throws(
    () => sequencePositions([true], new Map()),
    /^TypeError.*Expected an array, but got \[object Map] \(object\)\./,
    'should throw a type error when the second argument is a non-array value.'
  );

  t.throws(
    () => sequencePositions(['a'], ['b'], 'c'),
    /^TypeError.*Expected an index where to start the searching forwards in the array, but got c \(string\)\./,
    'should throw a type error when the third argument is not a number.'
  );

  t.throws(
    () => sequencePositions(['a'], ['b'], ''),
    /^TypeError.*Expected an index where to start the searching forwards in the array, but got an empty string\./,
    'should throw a type error when the third argument is an empty string.'
  );

  t.end();
});
