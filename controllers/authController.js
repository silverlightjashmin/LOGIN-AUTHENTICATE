const User = require('../models/User');

const returnSignupPage = (req, res) => {
    res.send("success")
}

const returnLoginPage = (req, res) => {
    res.send("success")
}

const createUser = async (req, res) => {
    res.send("success")
}

const loginUser = (req, res) => {
    //Code
}

const logoutUser = (req, res) => {
    
}

module.exports = {
    returnSignupPage,
    returnLoginPage,
    createUser,
    loginUser,
    logoutUser
}