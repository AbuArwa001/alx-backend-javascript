function findObj(object, id) {
  for (const obj of object) {
    if (id === obj.studentId) {
      return obj.grade;
    }
  }
  return null;
}

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
