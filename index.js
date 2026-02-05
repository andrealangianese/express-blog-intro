//richiamo express e la porta 

const express = require("express");
const app = express();
const port = 3000

//chiamata

app.get("/", (req, res) =>{
    res.send("hello it's me!")
})

//porta in ascolto

app.listen(port, () => {
    console.log(`sono la porta in ascolto numero ${port}`);
    
})