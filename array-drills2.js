function urlify(string){

  //const newString = string.replace(/ /g, '%20');
  
  // const stringArray = string.split(' ');
  // const newString = stringArray.join('%20');
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    let x = string.charAt(i);
    if (x === ' ') {
      newString = newString.concat('%20');
    } else {
      newString = newString.concat(x);
    }
  }

  console.log('input:', string);
  console.log('output:', newString);
}

function filtering(array){

  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    let x = array[i];
    if (x >= 5) {
      newArray.push(x);
    }
  }

  console.log('input:', array);
  console.log('output:', newArray);
}

function maxSum(array){

}

function merge(array1, array2){

}

function removeCharacters(string1, string2){

}

function products(array) {

}

function twoD(array){

}

function stringRotation(str1, str2){

}

//urlify('i dont know what this does');
filtering([5, -1, 6, -4, 3, 25, 0]);
//maxSum([4,6,-3,5,-2,1]);
//merge([1,3,6,8,11],[2,3,5,8,9,10]);
//removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');
//products([1,3,9,4]);
//twoD([[1,0,1,1,0],[0,1,1,1,0],[1,1,1,1,1],[1,0,1,1,1],[1,1,1,1,1]]);
//stringRotation('amazon','azonma');
//stringRotation('amazon','azonam');

