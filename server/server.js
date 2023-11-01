require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const {getAllBooks,addBook,deleteBook,updateBook } = require("./db/service")
const connectDB = require("./db/connect")
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
/** fecth all book api */
app.get('/books', async(req,res)=>{
    try {
        const list = await getAllBooks()
        res.json({list})
    } catch (error) {
        console.log(error)
    }
})
/** add a book api */
app.post('/addbook', async(req,res)=>{
    try {
        await addBook(req.body); 
        res.send('added')   
    } catch (error) {
        console.log(error)
    }
})
/** delete a book api */
app.post('/deletebook', async (req,res)=>{
    try {
        await deleteBook(req.body);
        res.send('deleted');
    } catch (error) {
        console.log(error)
    }
})
/*** update a book api */
app.post('/updatebook', async (req,res)=>{
   try {
    await updateBook(req.body)
    res.send('updated');
   } catch (error) {
    console.log(error)
   }
})

app.listen(port, async()=>{
    await connectDB(process.env.MONGODB_URL)  
    console.log(`server running on ${port}`)
})