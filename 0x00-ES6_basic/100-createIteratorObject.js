export default function createIteratorObject(report) {
  const allemployees = [];
  const obj = report.allEmployees;

  // Assuming obj is an object, use Object.keys(obj) to iterate over its keys
  for (const key of Object.keys(obj)) {
    for (const iterator of obj[key]) {
      allemployees.push(iterator);
    }
  }

  return allemployees;
}
