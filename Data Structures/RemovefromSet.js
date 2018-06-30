/*
In this exercises we are going to create a delete function for our set.
The function should be named this.remove. This function should accept a value and
check if it exists in the set. If it does, remove that value from the set, and return true.
Otherwise, return false.
*/

function Set() {
  let collection = ['dom', 'klon', 'kot'];

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
  // change code below this line
  this.remove = function (element) {
    if (this.has(element)) {
      collection = collection.filter(item => item !== element);
      return true;
    }

    return false;
  };
  // change code above this line
}
