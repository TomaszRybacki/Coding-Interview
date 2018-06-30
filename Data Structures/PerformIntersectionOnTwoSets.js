/*
In this exercise we are going to perform an intersection on 2 sets of data.
We will create a method on our Set data structure called intersection.
An intersection of sets represents all values that are common to two or more sets.
This method should take another Set as an argument and return the intersection of the two sets.

For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the
intersection of setA and setB is: setA.intersection(setB) = ['a', 'b'].
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

  this.union = function (otherSet) {
    const unionSet = new Set();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };
  // change code below this line
  this.intersection = function (otherSet) {
    const firstSet = this.values();
    const secondSet = otherSet.values();
    const resultSet = [];

    for (let i = 0; i < secondSet.length; i += 1) {
      if (firstSet.includes(secondSet[i])) {
        resultSet.push(secondSet[i]);
      }
    }
    return resultSet;
  }
  // change code above this line
}
