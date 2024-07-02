/**
 * Creates a grocery list.
 * @author Khalfan Athman <https://github.com/AbuArwa001>
 * @returns {Map(5) {
 *  'Apples' => 10,
 * 'Tomatoes' => 10,
 * 'Pasta' => 1,
 * 'Rice' => 1,
 * 'Banana' => 5
 * }}
 */
export default function groceriesList() {
  const groceries = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  return groceries;
}
