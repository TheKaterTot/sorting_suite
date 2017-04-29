module.exports = function(sortables) {
  let length = sortables.length;
  let swapped = true;
  while (swapped === true) {
    swapped = false;
    for (let i = 1; i < length; i++) {
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
