const Employee = require('../database/models/employeeModel')

module.exports.createEmployee = async serviceData => {
  try {

    const newEmployee = new Employee({
      firstName: serviceData.firstName,
      lastName: serviceData.lastName,
      birthDate: serviceData.birthDate,
      street: serviceData.street,
      city: serviceData.city,
      state: serviceData.state,
      zipCode: serviceData.zipCode,
      startDate: serviceData.startDate,
      department: serviceData.department,
    })

    let result = await newEmployee.save()

    return result
  } catch (error) {
    console.error('Error in employeeService.js', error)
    throw new Error(error)
  }
}

module.exports.getEmployees = async serviceData => {
  try {
    const employees = await Employee.find({})

    if (!employees) {
      throw new Error('Employee not found!')
    }

    return employees
  } catch (error) {
    console.error('Error in employeeService.js', error)
    throw new Error(error)
  }
}
