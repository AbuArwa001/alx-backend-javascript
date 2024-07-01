export default function getStudentIdsSum(students) {
  let cum = 0;
  return students.reduce((prev, curr, indx, arr) => {
    cum += arr[indx].id;
    return cum;
  }, cum);
}
