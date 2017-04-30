const expect = require('expect');
const bubbleSort = require('../../lib/index').bubbleSort;
const mergeSort = require('../../lib/index').mergeSort;
const _ = require('lodash');

describe('bubble sort', function() {
  it('sorts the array from lowest to highest', function() {
    expect(bubbleSort(["d", "b", "a", "c"])).toEqual(["a", "b", "c", "d"]);
    expect(bubbleSort(_.shuffle(_.range(100)))).toEqual(_.range(100));
  })
})

describe('merge sort', function() {
  it('sorts the array from lowest to highest', function() {
    expect(mergeSort(["d", "b", "a", "c"])).toEqual(["a", "b", "c", "d"]);
    expect(mergeSort(_.shuffle(_.range(100)))).toEqual(_.range(100));
  })
})
