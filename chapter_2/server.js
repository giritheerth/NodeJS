// address of this server is : URL-> http://localhost:8383
// IP : 127.0.01
// import express modeule
import express from 'express'
// declare app
const app = express()
// port
const PORT = 8383

let data ={
    name: "Giri"
}


// website endpoints- for sending back html and they typically come when a user enters a url in a browser
// interpret the incoming request for http verbs (method) path and routes
// method informs the nature of the request and then route is further subdirectory
app.get('/',(req,res)=> {
    // this is endpoint 1 - /
    console.log("I hit this endpoint!",req.method)
    res.send(`
        <body
        style="background:white;
        color:green;">
            <h1>Data is: </h1>
            <p>${JSON.stringify(data)}</p>
        </body>
    `)
    res.sendStatus(201)
    // 201 -created, 500 - internal server error , 404 - not found
})

app.get('/dashboard',(req,res)=>{
    console.log("I hit Dashboard endponint!")
    res.send('<h1>Dashboard</h1>')
})
// API endpoints- non visuals
app.get('/api/data',(req,res)=>{
    console.log('one for data!')
    res.send(data)
})

// CRUD - create-post, read-get, update-put, delete-delete

app.post('/api/data',(req,res)=>{
    const newEntry= req.body
    res.sendStatus(201)

})



app.listen(PORT, ()=> console.log(`Server has started on : ${PORT}`))
