/**
 * Cumulative calculation of ids sum.
 * @author Khalfan Athman <https://github.com/AbuArwa001>
 * @returns {[id1,id2,id3]}
 */
export default function getStudentIdsSum(students) {
  let cum = 0;
  return students.reduce((prev, curr, indx, arr) => {
    cum += arr[indx].id;
    return cum;
  }, cum);
}
