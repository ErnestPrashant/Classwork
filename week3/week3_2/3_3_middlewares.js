const express = require("express");
const app = express();
const port = 3006;

function isOldEnough(req,res,next){
    age = req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.json({
            msg: 'You are not of age yet '
        })
    }
}
//app.use(isOldEnough)   you can write this if you want to use that middleware in every route
app.get('/ride1',isOldEnough, (req,res) => {
    res.json({
        msg: 'you have successfully riden the ride1 '
    })
})

app.get('/ride2',isOldEnough, (req,res) => {
    res.json({
        msg: 'you have successfully riden the ride2 '
    })
})

app.listen(port, () => {
    console.log(`server started on port ${port}`);
})