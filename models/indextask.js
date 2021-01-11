const mongoose = require('mongoose');
// Creating playerScema database
const  playerSchema = new mongoose.Schema({
    Name:{
        type:String
    },
    points:{
        type:String,
    }

})

module.exports = mongoose.model('indextask', playerSchema);