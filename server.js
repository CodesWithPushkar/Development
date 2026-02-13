const express = require('express');
const jwt = require('jsonwebtoken');
const path = require('path');
const bcrypt = require('bcrypt');
require('dotenv').config();
const mongoose = require('mongoose');
const JWT_SECRET = process.env.JWT_SECRET;
const {Users, Todos} = require('./db');
const port = process.env.PORT;
const app = express();
const main = async () => {
    try{
        const connected = await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to mongodb");
    }catch(err){
        console.log("not connected");
    }
}

main();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


const auth = async (req,res,next) => {
    try{
        const token = req.headers.token;
        if(!token){
            res.status(401).json({
                message: "Register first"
            });
            return;
        }
        const info = jwt.verify(token,JWT_SECRET);
        const user = await Users.findById(info.id);
        if(user){
            console.log("you are verified");
            req.userId = info.id;
            next();
        }
        else{
            res.status(401).json({
                message: "Register first"
            });
            return;
        }
    }catch(err){
        res.status(500).json({
            message: "Server error"
        });
    }
}

app.post('/signup', async (req,res) => {
    try{
        const {username,email,password} = req.body;
        if(!username || !email || !password){
            res.status(400).json({
                message: "Missing fields"
            });
            return;
        }
        const isEmailExist = await Users.findOne({email: email});
        if(isEmailExist){
            res.status(409).json({
                message: "User Already exist"
            });
            return;
        }
        const hasedPassword = await bcrypt.hash(password, 5);
        await Users.create({
            username,
            email,
            password: hasedPassword
        });
        res.status(200).json({
            message: "you signed up"
        })
    }catch(err){
        res.status(500).json({
            message: "Server error"
        });
    }
})

app.post('/signin', async (req,res) => {
    try{
        const {email,password} = req.body;
        console.log(req.body);

        if(!email || !password){
            res.status(400).json({
                message: "Missing fields"
            });
            return;
        }
        
        const user = await Users.findOne({email});
        if(!user){
            res.status(401).json({
                message: "Wrong email and password"
            })
            return;
        }
        const checkPassword = await bcrypt.compare(password,user.password);
        if(!checkPassword){
            res.status(401).json({
                message: "Wrong email and password"
            })
            return;
        }


        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);

        console.log("sign in");
        res.status(200).json({
            token
        });

    }catch(err){
        res.status(500).json({
            message: "Server Error"
        })
    }
});

app.post('/todo', auth, async (req, res) => {
    try{
        const {task} = req.body;
        if(!task){
            res.status(400).json({
                message: "Add Todo First"
            });
        }

        const userId = req.userId;
        await Todos.create({
            title: task,
            done: false,
            userId
        });

        res.status(200).json({
            message: "Todo Added"
        })

    }catch(err){
        res.status(500).json({
            message: "Server error"
        });
    }
});

app.get("/todos", auth, async (req, res) => {
    try{
        const userId = req.userId;

        const todos = await Todos.find({
            userId: new mongoose.Types.ObjectId(userId)
        });
        res.status(200).json({
            todos
        });

    }catch(err){
        res.status(500).json({
            message: "Server error"
        });
    }
})


app.listen(port, () => {
    console.log(`Listning in port ${port}`)
});