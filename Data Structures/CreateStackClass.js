/*
In the last section, we talked about what a stack is and how we can use an array
to represent a stack.In this section, we will be creating our own stack class.

Although you can use arrays to create stacks, sometimes it is best to limit the amount
of control we have with our stacks.

Apart from the push and pop method, stacks have other useful methods. Let's add a peek,
isEmpty, and clear method to our stack class.

Instructions

Write a push method that pushes an element to the top of the stack, a pop method that
removes the element on the top of the stack, a peek method that looks at the first element
in the stack, an isEmpty method that checks if the stack is empty, and a clear method that
removes all elements from the stack.

Normally stacks don't have this, but we've added a print helper method that
console logs the collection.
*/

function Stack() {
  let collection = [];
  this.print = function () {
    console.log(collection);
  };
  // Only change code below this line

  this.push = function (item) {
    collection.push(item);
  };

  this.pop = function (item) {
    return collection.pop(item);
  };

  this.peek = function () {
    return collection[collection.length - 1];
  };

  this.isEmpty = function () {
    return collection.length === 0;
  };

  this.clear = function () {
    collection = [];
  };

  // Only change code above this line
}
