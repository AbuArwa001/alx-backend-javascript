export default function createReportObject(employeesList) {
  return {
    allEmployees: employeesList,
    getNumberOfDepartments(noOfDep) {
      return Object.keys(noOfDep).length;
    },
  };
}
