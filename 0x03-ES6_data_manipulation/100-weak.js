export const weakMap = new WeakMap();
/**
 * Gets Number of acces the students have to the  .
 * @author Khalfan Athman <https://github.com/AbuArwa001>
 *
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  let queryCount = weakMap.get(endpoint);
  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }
  queryCount += 1;

  weakMap.set(endpoint, queryCount);
}
