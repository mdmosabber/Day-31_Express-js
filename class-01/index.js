const express = require('express');
require('dotenv').config();

const app = express();



app.get('/',(req, res)=> {
    res.send('<h1>Allah</h1>')
})

app.get('/download',(req, res)=> {
    res.download('./public/images/image-1.jpg');
})

app.get('/redirect', (req, res)=> {
    res.redirect('http://localhost:8080/bangladesh')
})

app.get('/bangladesh',(req, res)=> {
    res.send('<h1> This is bangladesh </h1>')
})

app.get('/header',(req, res)=> {
    res.append('name', 'Mosabber');
    res.append('email', 'mosabber@gmail.com');
    res.status(201).end('<h1>Created</h1>')
})



app.get('/cookie',(req, res)=> {
    res.cookie('name','Md.Mosabber Hossen');
    res.cookie('email', 'mosabber@gmail.com');
    res.send('<h1>Cookie Set Successfully</h1>')
})


app.get('/clear-cookie',(req, res)=> {
    res.clearCookie('name');
    res.clearCookie('email');
    res.send('<h1>Cookie Clear Successfully</h1>')
})






const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`Server Run Successfully at http://localhost:${port}`)
})