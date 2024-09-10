const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const { randomInt } = require('crypto')
const cors = require('cors')
const app = express()
app.use(cors())

app.use(express.static('public'))

mongoose.connect('mongodb://localhost:27017/login_Details')
.then(()=> console.log('Connected to DB'))
.catch(err => console.log('Error: ', err))

const profileSchema = mongoose.Schema({
    uname: String,
    pass: String,
})

const login = mongoose.model('login',login_Details)

app.post('/pushData', upload.single('image'), async (req, res) =>{
    const body = req.body
    const user = new Profile({
        uname: body.uname,
        pass: body.pass,
    })  
    
    await user.save()
    res.status(200).send({msg : 'Data saved successfully'})
})

app.get('/fetchData', async (req, res)=>{
    const data = await Profile.find()
    res.status(200).send(data)
})

app.listen(4000, ()=>{
    console.log('App running on http://localhost:4000')
})