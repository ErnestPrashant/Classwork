const express = require("express");
const app = express();
const port = 3005;

app.get('/health-checkup', (req,res) => {

    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != 'prashant' || password != 'admin') {
        res.status(403).json({
            msg: "User not found "
        })
        return ;
    }

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(411).json({
            msg: "invalid input"
        })
        return ;
    }
    res.json({
        msg: 'Everything is fine '
    })
})

app.listen(port, () => {
    console.log('App listening on port '+ port);
})