// Write your solution in this file!
const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
};
const employees = updateEmployeeWithKeyAndValue(employee, "name", "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  employee[key] = value;
  return employee;
};
function updateEmployeeWithKeyAndValue(employee, key, value){
  const new_employee = {...employee};
  new_employee[key] = value;
  return new_employee;
};
const updatedEmployeeWithKeyandValue = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];           
  return newEmployee;                 
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
  delete employee[key];
  return employee;
};
