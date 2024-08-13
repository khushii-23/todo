const Todo = require('../models/todoSchema')

exports.createTodo = async (req, res) => {
    try {
        let todo = new Todo(req.body)
        await todo.save()
        res.json({
            success: true
        })
    } catch (error) {
        res.json({
            succes: false,
            error: error
        })
    }
}


exports.getALLTodo = async (req, res) => {
    try {
        const todos = await Todo.find()
        res.json({
            success: true,
            data: todos
        })
    } catch (error) {
        res.json({
            success: false,
            error: error
        })
    }
}

exports.getTodoById = async(req,res)=>{
    try{
        const todo = await Todo.findById(req.params.id)
        res.json({
            succes:true,
            data:todo
        })
    } catch(error){
       res.json({
        success:false,
        error:error
       })     
    }
}

exports.deleteTodoById = async(req,res)=>{
    try{
            const todo = await Todo.findByIdAndDelete(req.params.id)    
            res.json({
                success:true,
                data:todo
            })
        }catch(error){
            res.json({
                success:false,
                error:error
            })
    }
}

exports.updateTodoById = async(req,res)=>{
    try{
            const todo = await Todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
            res.json({
                succes:true,
                data:todo
            })
        } catch(error){
           res.json({
            success:false,
            error:error
           })    
    }
}