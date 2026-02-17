const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const JWT_SECRET = "helloiampushkar"
app.use(express.json());

const users = [];
app.post('/signup',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password
    });
    res.send("You signup");
});

app.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    let foundUser = users.find(u => u.username===username && u.password===password);
    if(foundUser){
        const token = jwt.sign({
            username: username
        },JWT_SECRET);

        res.json({
            token: token
        });
    }
    else{
        res.status(403).send("Not found user enter again");
    }
    
});

app.get('/me',(req,res)=>{
    const token = req.headers.token;
    const decodeInformation = jwt.verify(token,JWT_SECRET); // {username: "pushkar"}
    const username = decodeInformation.username;
    let foundUser = users.find(u => u.username===username);
    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password,
        })
    }else{
        res.json({
            message: "invalid"
        })
    }
})




app.listen(3000);
