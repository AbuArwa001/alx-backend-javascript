function findObj(object, id) {
  for (const obj of object) {
    if (id === obj.studentId) {
      return obj.grade;
    }
  }
  return null;
}

/**
 * updates Student Grade By City.
 * @author Khalfan Athman <https://github.com/AbuArwa001>
 * @returns {{id: Number, firstName: String, location: String, grade: grade}[]}
 */
export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const grade = findObj(newGrades, student.id);
      return {
        ...student,
        grade: grade !== null ? grade : 'N/A',
      };
    });
}
