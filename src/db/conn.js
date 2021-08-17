const mongoose = require("mongoose");
const db = "mongodb+srv://saurabh:saurabh@123t@cluster0.7cw4e.mongodb.net/dancewebsite?retryWrites=true&w=majority";
mongoose.connect("db", {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection successful");
}).catch(() => {
    console.log("no connection");
});