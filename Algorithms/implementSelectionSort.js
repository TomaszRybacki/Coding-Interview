/*
Here we will implement selection sort. Selection sort works by selecting the
minimum value in a list and swapping it with the first value in the list.
It then starts at the second position, selects the smallest value in the remaining list,
and swaps it with the second element. It continues iterating through the list and
swapping elements until it reaches the end of the list. Now the list is sorted.
Selection sort has quadratic time complexity in all cases.

Instructions: Write a function selectionSort which takes an array of integers as
input and returns an array of these integers in sorted order from least to greatest.

Note:
We are calling this function from behind the scenes; the test array we are using is
commented out in the editor. Try logging array to see your sorting algorithm in action!
*/

function selectionSort(array) {
  // change code below this line
  const sortedArray = [];
  const iterationCount = array.length;

  for (let i = 0; i < iterationCount; i += 1) {
    const minNumber = Math.min(...array);
    sortedArray.push(minNumber);

    const index = array.indexOf(minNumber);
    array.splice(index, 1);
  }

  array = sortedArray;
  // change code above this line
  return array;
}


const testArray = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
// result

console.log(selectionSort(testArray));
