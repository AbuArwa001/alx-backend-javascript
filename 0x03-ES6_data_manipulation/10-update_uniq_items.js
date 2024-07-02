/**
  * updates Unique Items.
  * @author Khalfan Athman <https://github.com/AbuArwa001>
  * @returns {Map(5) {
  *  'Apples' => 10,
  * 'Tomatoes' => 10,
  * 'Pasta' => 100,
  * 'Rice' => 100,
  * 'Banana' => 5
  * }}
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    return Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
  return map;
}
