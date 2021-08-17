const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Saurabhdyanmic",{
   useCreateIndex:true,
   useNewUrlParser:true,
   useUnifiedTopology:true 
}).then(()=>{
   console.log("connection successful"); 
}).catch( ()=>{
    console.log("no connection");
});