// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  /// [3, 2, 0, 4, 1]
  // sorted: []

  // popped: 1
  // sorted: [null]
  // traverse sorted

  // Your code here
  let newArr = [...arr];

  // to store sorted items
  let sorted = [];

  while (newArr.length > 0) {
    console.log(sorted.join(','));

    // pop from input array
    let unsorted = newArr.pop();

    // increase sorted array length, so we can shift effectively
    sorted[sorted.length] = null;

    // go through sorted array
    for (let i = sorted.length - 1; i >= 0; i--) {
      // check if we have an insertion point, or if we are inserting to
      // sorted array for the first time (i - 1 < 0)
      if (i === 0 || sorted[i - 1] < unsorted) {
        sorted[i] = unsorted;
        break;
      }
      // otherwise shift to the right by 1
      sorted[i] = sorted[i - 1];
    }
  }

  // return sorted array
  return sorted;
}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here
  let divider = 1;
  while (divider < arr.length) {
    // print intermediate steps:
    console.log(arr.join(','));

    // grab first item in unsorted half
    let unsorted = arr[divider];

    // go through array from divider to 0 and find
    // appropriate place to insert current unsorted
    for (let i = divider; i >= 0; i--) {
      if (i === 0 || arr[i - 1] < unsorted) {
        arr[i] = unsorted;
        divider += 1;
        break;
      } else {
        // otherwise, shift to the right by 1
        arr[i] = arr[i - 1];
      }
    }
  }
}

module.exports = [insertionSort, insertionSortInPlace];
