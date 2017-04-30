const _ = require('lodash');

exports.bubbleSort = function(sortables) {
  let swapped = true;
  while (swapped === true) {
    swapped = false;
    for (let i = 1; i < sortables.length; i++) {
      if (sortables[i-1] > sortables[i]) {
        previous = sortables[i-1];
        current = sortables[i];
        sortables[i-1] = current;
        sortables[i] = previous;
        swapped = true;
      }
    }
  }
  return sortables;
}

function mergeSort(sortables) {
  if (sortables.length <= 1) {
    return sortables;
  }

  let left = [];
  let right = [];

  for (let i = 0; i < sortables.length; i++) {
    if (i < sortables.length/2) {
      left.push(sortables[i])
    } else {
      right.push(sortables[i])
    }
  }

  left = mergeSort(left);
  right = mergeSort(right);

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (_.first(left) <= _.first(right)) {
      result.push(_.first(left));
      left = _.drop(left);
    } else {
      result.push(_.first(right));
      right = _.drop(right);
    }
  }

  while (left.length > 0) {
    result.push(_.first(left));
    left = _.drop(left);
  }

  while (right.length > 0) {
    result.push(_.first(right));
    right = _.drop(right);
  }

  return result;
}

exports.mergeSort = mergeSort;
