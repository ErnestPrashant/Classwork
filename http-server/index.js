const express = require ("express");
const bodyParser = require("body-parser");
const app = express()
const port = 3000
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log(req.body.msg);    
 // res.send(req.body.msg);  this or next lines

//   res.send({
//     output: "how you doin..."
//   })
res.send("hello world");

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})