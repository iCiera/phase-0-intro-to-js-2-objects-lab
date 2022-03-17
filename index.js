// Write your solution in this file!
const employee = {}
employee.name = 'Nemo'
employee.address = 'P.Sherman 42 Wallaby Way Sydney'

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   const  newEmployee = employee
   newEmployee[key] = value
    return newEmployee
}
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...employee}
    delete newEmployee['name']
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const  newEmployee = employee
    delete newEmployee['name']
    return newEmployee
}
