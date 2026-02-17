const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "thisisme"
const app = express();

app.use(express.json());


let users = [];


app.get("/",(req,res) => {
    res.sendFile(__dirname+"/public/index.html");
});


app.post("/signup", (req,res) => {
    const username = req.body.username;
    const pass = req.body.pass;
    users.push({
        username: username,
        pass: pass
    });
    console.log(users);
    res.send("sign up successfully");
})

app.post("/signin", (req,res) => {
    const username = req.body.username;
    const pass = req.body.pass;
    const founduser = users.find(user => user.username===username && user.pass===pass);
    if(founduser){
        const token = jwt.sign({
            username: username
        },JWT_SECRET);
        
        res.json({
            token: token
        });
        console.log("You are signin")
    }
    else res.status(403).send("wrong credintials")
});

function auth(req,res,next){
    const token = req.headers.token;
    const decodeInformation = jwt.verify(token,JWT_SECRET);
    const username = decodeInformation.username;
    if(username){
        req.username = username;
        next();
    }
    else res.status(404).send("Not found");
}

app.get("/me", auth, (req,res) => {
    const username = req.username;
    const foundUser = users.find(user => user.username===username);
    if(foundUser){
        res.json({
            username: foundUser.username,
            pass: foundUser.pass
        });
    }
    else{
        res.send("Invalid users");
    }

})
app.listen(3000);