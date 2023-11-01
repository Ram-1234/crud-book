const mongoose = require('mongoose');

const bookSchema=({
    title:{
        type:String
    },
    auther:{
        type:String
    },
    summary:{
        type:String
    }
})

module.exports=mongoose.model('books', bookSchema);