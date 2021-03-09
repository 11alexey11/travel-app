const express = require("express")
const config = require("./config/app")
const app = express()

app.get('/home', (req, res) => {
    return res.send("Home page");
})

app.get('/login', (req, res) => {
    return res.send("Login page current");
})

const port = config.appPort;

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

console.log("Hello")