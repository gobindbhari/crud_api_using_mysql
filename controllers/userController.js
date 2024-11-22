const Temp = require("../models/tempModel");
const User = require("../models/userModel");

const createUser = async (req,res) => {
    try {
        const { firstname,lastname,email} = req.body
        console.log(firstname,lastname,email,"sdasjdkl;asjd;ask")
        // if( !firstname || !lastname || !email)res.json({message: 'all fields are required'})
        const data = await Temp.create({
            firstName :firstname,
            lastName :lastname,
            // email :email
        })
        console.log('=-=-=--==-=-=-=-=-=-=-=-=-=-=-===-=-=-=-=------------------')
        res.send(data)
    } catch (error) {
        console.log('error in createUser Controller',error)
        res.json({message: 'error in createUser Controller'})
    }
}

const findAllUsers = async (req,res) => {
    try {
        const data = await User.findAll({
            // where:{id:2},
            include:{
                model:Temp
            }
        })
        res.send(data)
        console.log(data.length)
    } catch (error) {
        console.log('error in findAllUsers Controller',error)
        res.json({message: 'error in findAllUsers Controller'})
    }
}

const findByIdUsers = async (req,res) => {
    try {
        const {id}= req.params
        if( !id)res.json({message: 'Id is required'})
        const data = await User.findByPk(id)
        res.send(data)
    } catch (error) {
        console.log('error in findAllUsers Controller',error)
        res.json({message: 'error in findAllUsers Controller'})
    }
}

const updateUsers = async (req,res) => {
    try {
        const {id}= req.params
        const { firstname,lastname,email} = req.body
        if( !id)res.json({message: 'Id is required'})
        const data = await User.findByPk(id)
        if(!id){ return res.status(404).json({message: 'Id is not found'})}
        const updateData = await User.update({
            firstname,lastname,email
        },{ where : {id:id}})
        console.log('User updated successfully!')
        return res.status(201).send('User updated successfully!')
    } catch (error) {
        console.log('error in updateUsers Controller',error)
        return res.status(400).json({message: 'error in updateUsers Controller'})
    }
}

const deleteUsers = async (req,res) => {
    try {
        const {id}= req.params
        if( !id)res.json({message: 'Id is required'})
        const data = await User.findByPk(id)
        if(!id){ return res.status(404).json({message: 'Id is not found'})}
        const updateData = await User.destroy({ where : {id:id}})
        console.log('User updated successfully!')
        return res.status(200).send('User deleted successfully!')
    } catch (error) {
        console.log('error in deleteUsers Controller',error)
        return res.status(400).json({message: 'error in deleteUsers Controller'})
    }
}



module.exports = {createUser, findAllUsers, findByIdUsers, updateUsers, deleteUsers}