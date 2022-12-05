// Logic, Buisness Logic, Data Access Logic

const User = require('../models/userModel')

exports.home = (req, res) => {
  res.send('Hello from Alpha')
}

exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body
    if (!name || !email) {
      return
      res.status(400).json({ msg: 'Please fill all the fields' })
    }
    const userExists = await User.findOne({ email })
    if (userExists) {
      throw new Error('Email already exists')
    }
    //Insert into Database
    const user = await User.create({
      name,
      email,
    })
    res
      .status(201)
      .json({ success: true, message: 'user created successfully ' })
  } catch (err) {
    console.log(err)
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json({ success: 'true', users })
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: 'false',
      message: 'Error in getting users',
    })
  }
}
exports.editUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({
      success: 'true',
      message: 'User updated',
    })
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: 'false',
      message: 'Error in updating user',
    })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id
    const user = await User.findByIdAndDelete(userId)
    res.status(200).json({ success: 'true', message: 'User deleted' })
  } catch (error) {
    console.log(error)
    res.status(401).json({
      success: 'false',
      message: 'Error in deleting user',
    })
  }
}
