// import express modeule
const express = require('express')
// declare app
const app = express()
// port
const PORT = 8383


app.listen(PORT, ()=> console.log(`Server has started on : ${PORT}`))
