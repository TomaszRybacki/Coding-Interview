/*
In this exercise we are going to create a size function for our Set.
This function should be named this.size and it should return the size of the collection.
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

  // change code below this line
  this.size = function () {
    return collection.length;
  };
  // change code above this line
}
