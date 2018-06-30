/*
The next few challenges will cover maps and hash tables.
Maps are data structures that store key-value pairs. In JavaScript,
these are available to us as objects. Maps provide rapid lookup of stored
items based on key values and are very common and useful data structures.

Instructions: Let's get some practice creating our own map. Because JavaScript
objects provide a much more efficient map structure than anything we could write here,
this is intended primarily as a learning exercise. However, JavaScript objects
only provide us with certain operations. What if we wanted to define custom operations?

Use the Map object provided here as a wrapper around a JavaScript object.
Create the following methods and operations on the Map object:

add accepts a key, value pair to add to the map

remove accepts a key and removes the associated key, value pair

get accepts a key and returns the stored value

has returns a boolean for the presence or absence of an item

values returns an array of all the values in the map

size returns the number of items in the map

clear empties the map
*/


const Map = function () {
  this.collection = {};
  // change code below this line
  this.add = function (key, value) {
    this.collection[key] = value;
  };

  this.remove = function (key) {
    delete this.collection[key];
  };

  this.get = function (key) {
    return this.collection[key];
  };

  this.has = function (item) {
    const values = this.values();
    return values.includes(item);
  };

  this.values = function () {
    return Object.values(this.collection);
  };

  this.size = function () {
    return Object.keys(this.collection).length;
  };

  this.clear = function () {
    this.collection = {};
  };
  // change code above this line
};
