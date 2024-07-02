/**
 * Retrieves a filtered list of student from a particular location.
 * @author Khalfan Athman <https://github.com/AbuArwa001>
 * @returns {[1,2,5]}
 */
export default function getListStudentIds(students, location) {
  return students.filter((val) => location === val.location);
}
