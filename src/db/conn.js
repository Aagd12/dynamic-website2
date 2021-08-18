const mongoose = require("mongoose");
const DB = "mongodb+srv://saurabh:saurabh@123t@cluster0.7cw4e.mongodb.net/dancewebsite?retryWrites=true&w=majority";
mongoose.connect(DB, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection successful");
}).catch(() => {
    console.log("no connection");
});