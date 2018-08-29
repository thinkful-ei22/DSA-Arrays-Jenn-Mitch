const Array = require('./arrays');

function main() {
  Array.SIZE_RATIO = 3;

  //create an instance of the array class
  let arr = new Array();

  //add an item to the array
  // 1.
  arr.push(3);
  // 2.
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);
  // 3.
  arr.pop();
  arr.pop();
  arr.pop();
  //console.log(arr.get(0)); // print the first item in the array arr
  // empty the array and add just one item
  arr.pop();
  arr.pop();
  arr.pop();
  arr.push('tauhida');
  console.log(arr.get(0)); // print the one item you just added? what is the result

  console.log(arr);

}

main();
// 1. What is the length, capacity and memory address of your array?
// Array { length: 1, _capacity: 3, ptr: 0 }

// 2. What is the length, capacity and memory address of your array? Explain the result of your program after adding the new lines of code
// Array { length: 6, _capacity: 12, ptr: 3 }
// it is likely that the space directly after what you allocated for the array will have already been allocated elsewhere for some other purpose. So instead you have to allocate a new, larger chunk of memory, copy any existing values from the old to the new chunk, and free the old chunk:

// 3. What is the length, capacity and address of your array? Explain the result of your program after adding the new lines of code
// Array { length: 3, _capacity: 12, ptr: 3 }
// Print the first item in the array arr: 3

// 4. Empty the array and add just one item arr.push('tauhida');
// Print this one item, what is the result, explain
// result: NaN - because 'tauhida' is a string not a number and the array is set up for numbers - ask about this

// What is the purpose of the _resize() funtion in your Array class?
// To resize the array to accomodate more data when capacity is reached

