/**
 * Generate concatenated string.
 * @author Khalfan Athman <https://github.com/AbuArwa001>
 * @returns {string}
 */
export default function cleanSet(set, startString) {
  let conc = '';
  if (!startString) {
    return conc;
  }
  set.forEach((element) => {
    let newElement = '';
    if (element.startsWith(startString)) {
      newElement = element.slice(startString.length);
      conc += `${newElement}-`;
    }
  });
  return conc.slice(0, -1);
}
