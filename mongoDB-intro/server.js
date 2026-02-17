const express = require('express');
const bcrypt = require('bcrypt');
const {UsersModel, TodosModel} = require('./db');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const JWT_SECRET = "1223fjdijidajsjfajjhjasodijfafdhjfakn"

const app = express();

mongoose.connect("mongodb+srv://PushkarPant:pCjQfjfiknqtC7Of@cluster0.tadlxcp.mongodb.net/todo-Myapp-test-2").then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB Connection Error:', err));;

app.use(express.json());

async function auth(req,res,next){
    try{
        const token = req.headers.token;
        const info = jwt.verify(token,JWT_SECRET);
        const user = await UsersModel.findById(info.id);
        if(user){
            console.log("you are verified");
            req.userId = info.id;
            next();
        }
        else res.status(401).send("You are not verified")
    } catch(err){
        res.status(401).send("Invalid token");
    } 
}   

app.post("/signup", async(req,res) => {
    const {email, username, password} = req.body;
    try{ 
        const hashedPassword =  await bcrypt.hash(password,5);
        await UsersModel.create({
            email: email,
            name: username,
            password: hashedPassword
        });
    } catch(err){
        console.log("Error while putting in db")
    }
    res.status(200).json({
        message: "You are log in"
    })
});

app.post("/signin", async (req,res) => {
    const {email, password} = req.body;
    const response = await UsersModel.findOne({
        email: email,
    });

    if(!response){
        res.status(403).json({
            message: "User does not exist"
        });
        return;
    }

    const matchedPassword =  await bcrypt.compare(password, response.password);


    if(matchedPassword){
        const token = jwt.sign({
            id: response._id
        },JWT_SECRET);
        res.status(200).json({
            token
        });
    }
    else{
        res.status(401).json({
            message: "Invalid"
        });
    }
});

app.post("/todo", auth, async (req,res) => {
    const {title, done} = req.body;
    console.log("After req")
    await TodosModel.create({
        title: title,
        done: done,
        userId: req.userId
    })
    console.log("After add")
    res.status(200).send("Todo added");
}); 

app.get("/todos", auth, async (req,res) => {
    const todos = await TodosModel.find({
        userId: req.userId
    });
    res.json({
        todos
    });
});

app.listen(3000, () => {
    console.log("port start");
});