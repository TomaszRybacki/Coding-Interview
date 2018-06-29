/*
In the next few exercises we are going to create a function to emulate a data structure
called a "Set". A Set is like an array, but it cannot contain duplicate values.
The typical use for a Set is to simply check for the presence of an item.
This can be implemented with an object, for instance:

var set = new Object();
set.foo = true;
// See if foo exists in our set:
console.log(set.foo) // true
In the next few exercises, we will build a full featured Set from scratch.

For this exercise, create a function that will add a value to our set collection as
long as the value does not already exist in the set. For example:

this.add = function(element) {
//some code to add value to the set
}
The function should return true if the value is successfully added and false otherwise.
*/

function Set() {
  const collection = [];

  this.has = function (element) {
    return (collection.indexOf(element) !== -1);
  };

  this.values = function () {
    return collection;
  };

  // change code below this line
  this.add = function (item) {
    if (this.has(item)) {
      return false;
    }

    collection.push(item);
    return true;
  };
  // change code above this line
}
