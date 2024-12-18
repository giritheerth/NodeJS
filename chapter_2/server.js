// address of this server is : URL-> http://localhost:8383
// IP : 127.0.01
// import express modeule
import express from 'express'
// declare app
const app = express()
// port
const PORT = 8383

// interpret the incoming request for http verbs (method) path and routes
// method informs the nature of the request and then route is further subdirectory
app.get('/',(req,res)=> {
    // this is endpoint 1 - /
    console.log("I hit this endpoint!",req.method)
    res.sendStatus(201)
    // 201 -created, 500 - internal server error , 404 - not found

})

app.get('/dashboard',(req,res)=>{
    console.log("I hit Dashboard endponint!")
    res.send('Welcome!')
})



app.listen(PORT, ()=> console.log(`Server has started on : ${PORT}`))
