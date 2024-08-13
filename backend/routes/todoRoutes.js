const express = require('express')
const {createTodo,getALLTodo, getTodoById, deleteTodoById,updateTodoById} = require('../controllers/todoControllers')


const router= express.Router()



router.post('/createTodo',createTodo)
router.get("/getALLTodos",getALLTodo)
router.get("/getTodoById/:id",getTodoById)
router.delete("/deleteTodoById/:id",deleteTodoById)
router.patch("/updateTodoById/:id",updateTodoById)

module.exports =router;