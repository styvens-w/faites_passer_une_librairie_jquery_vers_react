const employeeService = require('../services/employeeService')

module.exports.createEmployee = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await employeeService.createEmployee(req.body)
    response.status = 200
    response.message = 'Employee successfully created'
    response.body = responseFromService
  } catch (error) {
    console.error('Something went wrong in employeeController.js', error)
    response.status = 400
    response.message = error.message
  }

  return res.status(response.status).send(response)
}


module.exports.getEmployees = async (req, res) => {
  let response = {}


  try {
    const responseFromService = await employeeService.getEmployees(req)
    response.status = 200
    response.message = 'Successfully got employees data'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in employeeController.js')
    response.status = 400
    response.message = error.message
  }
  return res.status(response.status).send(response)
}