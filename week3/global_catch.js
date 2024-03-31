const express = require("express");
const app = express();
app.use(express.json());

app.post("/health-checkup", function (req, res) {
// do something with kidney here
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.json({
        msg: `your kidney length is ${kidneyLength}`
    })
});

//global catches 

app.use(function(err, req, res, next){
    res.json({
        msg: "sorry something is wrong with the server "
    })
})

app.listen (3000 , () => {
    console.log("server is running ")
});