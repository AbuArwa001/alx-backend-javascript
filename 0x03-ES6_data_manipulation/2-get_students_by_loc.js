export default function getListStudentIds(students, location) {
  return students.filter((val) => location === val.location);
}
