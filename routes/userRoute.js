const { createUser, findAllUsers, findByIdUsers, updateUsers, deleteUsers } = require("../controllers/userController");
const express = require('express')
userRouter = express.Router()


userRouter.route('/create').post(createUser)

userRouter.route('/').get(findAllUsers)

userRouter.route('/:id').get(findByIdUsers)

userRouter.route('/update/:id').put(updateUsers)

userRouter.route('/delete/:id').delete(deleteUsers)

module.exports = userRouter;