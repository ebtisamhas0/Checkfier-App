const express = require('express');
const app =  express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const mongURL = "mongodb+srv://checkIn-admin:tAGaZ7sp38Qw43oG@cluster0.odzlhm2.mongodb.net/?retryWrites=true&w=majority"


require('./User')
const User = mongoose.model("user")
app.use(bodyParser.json())


mongoose.connect(mongURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
 } )

 mongoose.connection.on("connected",()=>{
    console.log("Connected Successfully!")
 })
 mongoose.connection.on("error",(err)=>{
    console.log("error", err)
 })

 app.post('/update',(req,res)=>{
    User.findByOneAndUpdate(req.body.id,{
        phone:(JSON.stringify(req.body.phone))
    }).then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err =>{
        console.log('error',err)
    })
 })
 
app.post('/send-data',(req,res)=>{
    const user = new User({
        phone:(JSON.stringify(req.body.phone))
        
    })
    user.save()
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})
app.get('/',(req,res)=>{
    User.find({})
    .then(data =>{
        console.log(data)
        res.send(data)
    }).catch(err => {
        console.log(err)
    })
})
    app.get('/show-number',(req,res)=>{
        User.findOne({_id:req.body.id})
        .then(data =>{
            console.log(data)
            res.send(data)
        }).catch(err => {
            console.log(err)
        })
}
)
app.listen(3000,()=>{
    console.log("Listening on 3000 ")
})
