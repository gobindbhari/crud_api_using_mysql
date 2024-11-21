const User = require("../models/userModel");

const createUser = async (req,res) => {
    try {
        const { firstname,lastname,email} = res.body
        if( !firstname || !lastname || !email)res.json({message: 'all fields are required'})
        const data = await User.create({
            firstname,lastname,email
        })
        res.send(data)
    } catch (error) {
        console.log('error in createUser Controller',error)
        res.json({message: 'error in createUser Controller'})
    }
}

module.exports = {createUser}