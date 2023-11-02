const connectDB = require("./connect");
const Product = require("../model/product");
const { ObjectId } = require("mongodb");

/** fetch all data */
const getAllBooks=async ()=>{
 try {
    return await Product.find({})
 } catch (error) {
    console.log(error)
 }
}
/** add book */
const addBook=async (dataJson)=>{
    try {
     await Product.create(dataJson)
    } catch (error) {
       console.log(error)
    }
   }

   /** delete book */
   const deleteBook=async(dataJson)=>{
    try {
       await Product.deleteOne({_id:new ObjectId(dataJson._id)})
    } catch (error) {
       console.log(error)
    }
   }
/** update book */
const updateBook=async (jsonData)=>{
    const filter = { _id:new ObjectId(jsonData._id) }
    const update = { $set: { ...jsonData.updateData } }
    const options = { upsert: true }
    try {
       await Product.updateOne(filter, update, options)
    } catch (error) {
       console.log(error)
    }
   }

   /*** search a book */
   const searchBook=async (jsonData)=>{
      const filter = { _id:new ObjectId(jsonData._id) }
      try {
         await Product.find(filter)
      } catch (error) {
         console.log(error)
      }
   }

   module.exports={getAllBooks, deleteBook,updateBook, addBook,searchBook}