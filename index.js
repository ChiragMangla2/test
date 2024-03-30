import express from "express";

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req,res) => {
    res.send("Hello From Chirag Mangla")
})

app.listen(port, ()=> {
    console.log("Server is running at the port of http://localhost:3000");
})