var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    name: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String,
        name: String
    },
    title: String,
    Description:String,
    Venue:String,
    postDate:String,
    link:String
     
});

module.exports = mongoose.model("Post", postSchema);