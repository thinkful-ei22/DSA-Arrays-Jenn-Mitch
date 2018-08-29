function urlify(string){

  //const newString = string.replace(/ /g, '%20');
  
  // const stringArray = string.split(' ');
  // const newString = stringArray.join('%20');
  let newString = '';

  for (let i = 0; i < string.length; i++) {
    let x = string[i];
    if (x === ' ') {
      newString += '%20';
    } else {
      newString += x;
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

function maxSum(array){ //[1,-3, 4, -1]
  let total=0;
  let currentTotal=0;
  for(let i=0; i<=array.length; i++){
    let num = array[i];
    currentTotal += num;
    if(currentTotal > total){ //if current total is larger than total, set total to current total
      total = currentTotal;
    }
  }
  console.log(total);
} //needs fix for edge case when starting with a negative

function merge(array1, array2){
  let newArrayIndex = 0;
  let array1Index = 0;
  let array2Index = 0;
  let newArray = [];
  while (newArrayIndex < (array1.length + array2.length)){

    let value1 = array1[array1Index];
    let value2 = array2[array2Index];
    console.log(value1, value2, value1 >= value2);
    if (value1 >= value2){
      newArray[newArrayIndex] = value2;
      array2Index++;
    }
    else{
      newArray[newArrayIndex] = value1;
      array1Index++;
    }
    newArrayIndex++;
  }
  console.log(newArray);
}

function removeCharacters(string1, string2){
  let newString = '';

  for (let i = 0; i < string1.length; i++) {
    let x = string1.charAt(i);
    for(let j = 0; j< string2.length; j++){
      let y = string2.charAt(j);
      if (x===y) {
        x = '';
      }
    }
    newString += x;
  }
  console.log(newString);
}

function products(array) {
  let resultArray = [];
  let product;
  for(let i = 0; i < array.length; i++){
    product = 1;
    for(let j = 0; j < array.length; j++){
      if(i !== j) product *= array[j];
    }
    resultArray.push(product);
  }
  console.log(resultArray);
}

function twoD(array){
  console.log('input', array);
  let newArray = array;

  const columns=[];
  const rows=[];

  for(let i = 0; i < newArray.length; i++){
    let row=newArray[i];
    for(let j = 0; j < row.length; j++){
      let item = row[j];
      if(item === 0){
        columns[j]=true;
        rows[i]=true;
      }
    }
  }
  for(let i=0; i<newArray.length; i++){
    let row = newArray[i];
    for(let j = 0; j < row.length; j++){
      if(rows[i]||columns[j]){
        row[j]=0;
      }
    }
  }
  console.log('output', newArray);
}
//solution 1
function stringRotation(str1, str2){
  let first=str1[0];
  let last=str1[str1.length-1];
  let answer=false;
  for(let i=0; i<str2.length; i++){
    if(str2[i]===last){
      if(str2[i+1]===first){
        answer=true;
      }
    }
  }
  console.log(answer);
}

//solution 2
function stringRotation2(str1, str2){
  let answer;

  if(str1.length !== str2.length) {
    answer = false;
  } else {
    const str3 = str1 + str1;
    console.log(str1, str2, str3);
    if(str3.includes(str2)) {
      answer = true;
    } else {
      answer = false;
    }
  }

  console.log(answer);
}

function stringRotation3(str1, str2) {
  return (str2+str2).indexOf(str1) !== -1;
}

//urlify('i dont know what this does');
// filtering([5, -1, 6, -4, 3, 25, 0]);
//maxSum([-4,6,-3,5,-2,1]);
//merge([1,3,6,8,11],[2,3,5,8,9,10]);
//removeCharacters('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou');
//products([1,3,9,4,]);
//twoD([[1,0,1,1,0],[0,1,1,1,0],[1,1,1,1,1],[1,0,1,1,1],[1,1,1,1,1]]);
// [[0,0,0,0,0],[0,0,0,0,0],[0,0,1,1,0],[0,0,0,0,0],[0,0,1,1,0]];
stringRotation('amazon','azonma');
stringRotation('amazon','azonam');
stringRotation2('pizza', 'zapiz');
stringRotation2('pizza', 'zzaip');
console.log(stringRotation3('pizza','zapiz'));
console.log(stringRotation3('pizza','zzaip'));

