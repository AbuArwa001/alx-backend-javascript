export default function appendToEachArrayValue(array, appendString) {
  let i = 0;
  const newArr = [];
  for (const val of array) {
    newArr[i] = appendString + val;
    i += 1;
  }

  return newArr;
}
