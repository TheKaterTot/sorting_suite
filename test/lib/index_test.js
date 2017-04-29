const expect = require('expect');
const bubbleSort = require('../../lib/index');
const _ = require('lodash');

describe('bubble sort', function() {
  it('sorts the array from lowest to highest', function() {
    expect(bubbleSort(["d", "b", "a", "c"])).toEqual(["a", "b", "c", "d"]);
    expect(bubbleSort(_.shuffle(_.range(100)))).toEqual(_.range(100));
  })
})
