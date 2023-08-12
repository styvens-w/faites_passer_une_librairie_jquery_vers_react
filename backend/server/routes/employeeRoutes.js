const express = require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')

router.post('/createEmployee', employeeController.createEmployee)

router.get(
  '/getEmployees',
    employeeController.getEmployees
)


module.exports = router
