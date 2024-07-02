/**
 * creates set From an Array.
 * @author Khalfan Athman <https://github.com/AbuArwa001>
 * @returns {[]}
*/
export default function setFromArray(array) {
  return Array.isArray(array) ? new Set(array) : new Set([]);
}
