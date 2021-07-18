const mongoose = require('mongoose');

const tiktokSchema = mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    messages: String,
    shares: String
});

// Collection inside database
module.exports = mongoose.model("tiktokVideos", tiktokSchema);