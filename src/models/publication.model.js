const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    name:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'post',
        required:true
    }
},{
    timestamps:true
})

module.exports = mongoose.model('publication',publicationSchema);