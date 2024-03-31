const express = require('express')
const mongoose = require('mongoose')
const {CreateTodo, UpdateTodo} = require('./types')
const {Todo} = require('./db')
const app = express();
const cors = require('cors')
app.use(cors());
app.use(express.json());
const port = 3000;

app.post('/todos', async (req, res) => {
    const createPayLoad = req.body;
    const check = CreateTodo.safeParse(createPayLoad);
    if(!check.success){
        res.status(411).json({
            msg: "You sent the wrong inputs "
        })
        return ;
    }
    await Todo.create({
        title: createPayLoad.title, 
        description: createPayLoad.description,
        completed: false
    })
    res.json({
        msg: "Todo created successfully"
    })
})

app.get('/todos', async(req, res) => {
    const data = await Todo.find({})
    res.json({
        data
    })
})

app.put('/completed', async (req, res) => {
    const updatePayLoad = req.body;
    const check = UpdateTodo.safeParse(updatePayLoad)
    if(!check.success){
        res.status(411).json({
            msg: "You send wrong inputs "
        })
        return ;
    }
    const todo = await Todo.findOneAndUpdate(
        {_id: updatePayLoad.id},
        {completed: true}
    )
    res.json({
        msg: "todo completed successfully "
    })
    
})

app.listen(port, () => {
    console.log(`example port listening on ${port}`);
})