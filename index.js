require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!, this is home page')
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please login here</h1>')
})

app.get('/update', (req, res)=>{
    res.send("This is update")
})

app.get('/register', (req, res)=>{
    res.send('<h1>Please register here</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})