export default function iterateThroughObject(reportWithIterator) {
  let str = '';
  for (const iterator of reportWithIterator) {
    str += `${iterator} | `;
  }
  return str.slice(0, -3);
}
