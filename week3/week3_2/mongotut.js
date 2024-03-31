const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://ernestprashant:VNa70rlRt6H5zL9T@cluster0.dtfr1w6.mongodb.net/test")

const User = mongoose.model('Users', {name: String, email: String, password: String });

app.post("/signup", async function(req, res) {
const username = req.body.username;
const password = req.body.password;
const name= req.body.name;
const existingUser = await User.findOne({ email: username });
// CRUD => create, update, delete, Read
if (existingUser) {
return res.status(400).send( "Username already exists");
}

const user = new User({
name: name,
email: username,
password: password
});

user.save();
res.json({
"msg":"User created successfully"
})
})