/**
 * checks if set has Values From an Array.
 * @author Khalfan Athman <https://github.com/AbuArwa001>
 * @returns {true}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
