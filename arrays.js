var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array,element) {
  return [element,...array]
}

function destructivelyAddElementToBeginningOfArray(array,elment) {
chocolateBars.unshift("twix")
  return chocolateBars
}
