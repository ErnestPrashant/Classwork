const express = require("express");
const app = express();
const zod = require("zod")

// const schema  = zod.array(zod.number());

const schema = zod.object({
    email: zod.string().email(),      //should look like an email
    password: zod.string().min(8),     //minimum lenght of password must be 8
    country: zod.literal("IN").or(zod.literal("US")),
})

app.use(express.json());

app.post("/health-checkup", function (req, res) {
    // const kidneys = req.body.kidneys;
    // const response = schema.safeParse(kidneys);
    const response = req.body;
    const resp = schema.safeParse(response)
    if(resp.success){
        res.json({
            msg: "request is good"
        })
    }
    else{
        res.send({
            response
        })
    }
});



app.listen (3002 , () => {
    console.log("server is running ")
});