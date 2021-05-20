const mongoose = require("mongoose");

const uri = "mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.nf3ar.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

// Connect MongoDB Atlas using mongoose connect method
mongoose.connect(uri, options).then(() => {
  console.log("Database connection estanlished");
},
 (err) => {
    console.log("Error connecting Database instance due to: ", err);
 }
)