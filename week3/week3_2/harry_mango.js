const express = require('express')
const mongoose = require('mongoose');
const { string } = require('zod');
const app = express();

mongoose.connect('mongodb+srv://ernestprashant:VNa70rlRt6H5zL9T@cluster0.dtfr1w6.mongodb.net/test')
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('Mongo error',err))

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    JobTitle:{
        type: String, 
    },
    gender:{
        type: String,
    }

},
{timestamps: true}          //automatically creates created at and updated at entries at data 
);

const User = mongoose.model("user", UserSchema)