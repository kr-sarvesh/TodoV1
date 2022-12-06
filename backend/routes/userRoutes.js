//URL PATH
const express = require('express')
const {
  home,
  createUser,
  deleteUser,
  editUser,
  getUsers,
} = require('../controllers/userControllers')
const router = express.Router()

router.get('/', home)
router.post('/createUser', createUser)
router.get('/getUsers', getUsers)
router.delete('/deleteUser/:id', deleteUser)
router.put('/editUser/:id', editUser)
module.exports = router
