/*
In this exercise we are going to perform a union on two sets of data.
We will create a method on our Set data structure called union.
This method should take another Set as an argument and return the union of the two sets,
excluding any duplicate values.

For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'],
then the union of setA and setB is: setA.union(setB) = ['a', 'b', 'c', 'd', 'e'].
*/

function Set() {
  const collection = [];

  this.has = function (element) {
    return (collection.indexOf(element) !== -1);
  };

  this.values = function () {
    return collection;
  };

  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  this.remove = function (element) {
    if (this.has(element)) {
      const index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  // change code below this line
  this.union = function (otherSet) {
    collection.push(...otherSet.values());
    const iterationCount = collection.length;

    for (let i = 0; i < iterationCount; i += 1) {
      for (let j = i + 1; j < iterationCount; j += 1) {
        if (collection[i] === collection[j]) {
          collection.splice(j, 1);
        }
      }
    }
    return collection;
  };
  // change code above this line
}
