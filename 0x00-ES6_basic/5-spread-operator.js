export default function concatArrays(array1, array2, string) {
  // Create a new array by spreading the elements from array1, array2, and string
  const combinedArray = [...array1, ...array2, ...string];
  return combinedArray;
}
