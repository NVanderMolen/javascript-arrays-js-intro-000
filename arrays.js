var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, element){
var newArray = [element,...arr]
return newArray
}

function destructivelyAddElementToBeginningOfArray(arr, element){
  arr.unshift(element);
  return arr
}
function addElementToEndOfArray(arr, element){
  var newArray = [...arr, element]
  return newArray;
}
function destructivelyAddElementToEndOfArray (arr, element){
  arr.push(element);
  return arr
}
function accessElementInArray(arr, i){
  return (arr[i]);
}
function destructivelyRemoveElementFromBeginningOfArray (arr){
   arr.shift();
   return arr
}
function removeElementFromBeginningOfArray (arr){
  return arr.slice()

}

function destructivelyRemoveElementFromEndOfArray (arr){
  return arr.pop();
}
function removeElementFromEndOfArray (arr){
  return arr.slice (0, arr.length -1)
}
